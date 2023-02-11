var express = require("express");
var router = express.Router();
const loginCheck = require("../module/loginCheck");

// let arr = [];

// // Get method
// router.get("/read", (req, res) => {
//   res.status(200).json({
//     message: "read success",
//   });
// });

// // Post method
// router.post("/create", (req, res) => {
//   // const data = req.body.data;
//   const { data } = req.body;
//   arr.push(data);
//   res.status(200).json({
//     message: "create success",
//     result: arr,
//   });
// });

// // Put method
// router.put("/update/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message: "update success",
//     result: arr,
//   });
//   console.log(id);
// });

// // Delete method
// router.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   arr.splice(id, 1);
//   res.status(200).json({
//     message: "delete success",
//     result: arr,
//   });
// });

router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success",
  });
});

module.exports = router;
