// const http = require("http"); // http 패키지를 사용하겠다.require는 패키지를 사용할 수 있도록 해줌

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" }); // 정상 200, 에러 404 html을 반환하겠다.
//     res.end("<p>Hello World~!</p>"); // 사용자에게 응답보낼 코드
//   })
//   .listen(3000, () => {
//     console.log("3000번 포트 서버 접속 완료~!"); // 서버를 실행할 코드
//   });

// // localhost : 현재 컴퓨터의 내부 주소, 서버 개발시 테스트용으로 쓰임 === 127.0.0.1 (IP주소)
// // port : 서버내의 프로세스를 구분하는 번호, 서버는 다양한 일을 처리 (http,db 등등) => 포트번호로 기능을 구분

// API서버 : 요청을 받고 응답을 하는 서버
const http = require("http");
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404);
      res.end("Not found!!!");
    }
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료~!");
  });
