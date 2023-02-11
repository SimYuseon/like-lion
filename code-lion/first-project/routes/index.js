var express = require("express");
var router = express.Router();

/* GET home page. */

router.post("/main", (req, res) => {
  const data = req.body.data;
  // res.send("문자열 응답"); //문자열 형식
  // res.json({
  //   message: "json응답", //json 형식
  // });
  // res.render("index"); //html 코드를 보여줌
});

module.exports = router;
