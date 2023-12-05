const { Comment } = require('../models'); // Comment 모델 가져오기

const CcommentController = {
  // 댓글 목록 조회
  getComments: async (req, res) => {
    try {
      // Sequelize를 이용해 모든 댓글 조회
      const comments = await Comment.findAll();
      res.render('comment/comment', { comments }); // 댓글 목록을 렌더링하는 뷰로 전달
    } catch (error) {
      res.status(500).json({ error: error.message }); // 오류가 발생하면 500 상태 코드와 에러 메시지 반환
    }
  },

  // 댓글 추가
  addComment: async (req, res) => {
    const { username, comment } = req.body;

    try {
      // Sequelize를 이용해 새로운 댓글 생성
      const newComment = await Comment.create({ username, comment });
      res.json({ message: 'Comment added successfully', commentId: newComment.commentID }); // 성공 메시지와 새로 추가된 댓글의 ID 반환
    } catch (error) {
      res.status(500).json({ error: error.message }); // 오류가 발생하면 500 상태 코드와 에러 메시지 반환
    }
  },

  // 댓글 수정
  updateComment: async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;

    try {
      // Sequelize를 이용해 댓글 업데이트
      await Comment.update({ comment }, { where: { commentID: id } });
      res.json({ message: 'Comment updated successfully' }); // 성공 메시지 반환
    } catch (error) {
      res.status(500).json({ error: error.message }); // 오류가 발생하면 500 상태 코드와 에러 메시지 반환
    }
  },

  // 댓글 삭제
  deleteComment: async (req, res) => {
    const { id } = req.params;

    try {
      // Sequelize를 이용해 댓글 삭제
      await Comment.destroy({ where: { commentID: id } });
      res.json({ message: 'Comment deleted successfully' }); // 성공 메시지 반환
    } catch (error) {
      res.status(500).json({ error: error.message }); // 오류가 발생하면 500 상태 코드와 에러 메시지 반환
    }
  },
};

module.exports = CcommentController;