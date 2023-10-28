const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path");

const app = express();
const PORT = 8000;

app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      
      const ext = path.extname(file.originalname); 
      const basename = path.basename(file.originalname, ext); 
      const fileName = basename + "_" + Date.now() + ext; 

      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

// single(), array(), fields() : 미들웨어. => 클라이언트가 보낸 요청 중에 userfile이라는 name의 파일 데이터가 있다면,
// 파일을 multer의 설정대로 저장해서, req.file or req.files 이라는 객체를 생성해서 다음 함수에 넘겨줌.
// single() : 파일 하나만 업로드할 때 사용함. -> req.file 생성
app.post("/upload", upload.single("userfile"), function (req, res) {
  console.log("file:", req.file);
  console.log("body:", req.body);
  res.send("파일 업로드");
});

app.post(
  "/upload/detail",
  uploadDetail.single("userfile"),
  function (req, res) {
    console.log("file detail:", req.file);
    console.log("body detail:", req.body);

    res.render("result", {
      src: req.file.path,
      title: req.body.title,
    });
    // res.send("파일 업로드");
  }
);

// array(): 파일 여러개 업로드. name(input)하나로 여러개의 파일을 받는 방법
// req.files 생성
app.post("/upload/array", uploadDetail.array("userfile"), function (req, res) {
  console.log("file 여러개(ver1):", req.files);

  res.send("여러개 업로드 성공");
});

// fields() : 파일 여러개 업로드. name이 두 개 이상(input이 2개 이상).
// req.files 생성
app.post(
  "/uploads/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log("file 여러개(ver2):", req.files);
    console.log("req.body", req.body);

    res.send("여러개 업로드 성공(ver2)");
  }
);

app.post(
  "/upload/dynamic",
  uploadDetail.single("userfile0"),
  function (req, res) {
    res.send({ src : req.file.path })
}
);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});