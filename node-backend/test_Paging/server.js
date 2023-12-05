/* http보다 개선된 express 모듈을 이용한 서버구축!
express 모듈은 미들웨어가 많이 지원된다.
Node.js에서의 미들웨어는 함수로 정의되어 있다.
express framework가 실무에서 많이 사용됨!
*/
var express = require("express"); //외부 모듈 
var app = express(); //객체 생성 
var fs = require("fs");
var ejs = require("ejs"); //서버에서 해석 및 실행되는 ejs파일 제어 모듈 
                          //php, asp, jsp와 동일 

//정적자원은 라우팅의 대상이 아니다. 따라서 정적자원의 위치를 지정하면 
//별도의 라우팅이 필용없다.(스프링의 경우엔 요청을 처리할 컨트롤러 지정이 필요없다.)
//__dirname : node.js의 전역변수 중 하나(웹서버의 루트 경로를 반환)
app.use(express.static(__dirname));

//게시판 목록 요청 
app.get("/notice/list", function(request, response){
    fs.readFile("./notice/list.ejs", "utf8", function(error, data){
        response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        response.end(ejs.render(data, {}));
    });
});

app.listen(7777, function(){
    console.log("The server is running at 7777 port...");
});