const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");


router.get("/", controller.home);


router.get("/visitors", controller.user);

// 회원 가입
router.post("/user", controller.postUser);

// 회원정보 수정
router.patch("/user/:id", function (req, res) {
  res.send("");
});

// 회원 탈퇴
router.delete("/user/:id", controller.deleteUser);

module.exports = router;




