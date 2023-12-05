// routes/index.js
const express = require('express');
const controller = require("../controller/index");
const router = express.Router();
const Ccomment = require('../controller/Ccomment');

router.get("/", controller.index);

// 댓글 목록을 가져오는 GET 라우트
router.get('/comment', Ccomment.getComments);
// 새 댓글을 생성하는 POST 라우트
router.post('/comment', Ccomment.createComment);

module.exports = router;