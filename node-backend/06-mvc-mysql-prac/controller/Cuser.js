const User = require("../model/User");

exports.home = (req, res) => {
  res.render("index");
};

exports.user = (req, res) => {
  Visitor.getVisitors((rows) => {
    res.render("user", { data: rows });
  });
};


exports.postUser = (req, res) => {
  // insert할 데이터
  console.log("req.body", req.body);
  User.insertUser(req.body, (id) => {
    console.log("ctrl postUser ", id);
    res.send({
      ...req.body,
      id,
    });
  });
};


exports.deleteUser = (req, res) => {
  console.log(req.params);
  User.delUser(req.params.id, (result) => {
    res.send({ result: result });
  });
};