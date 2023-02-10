// var는 function scope(변수에 접근할 수 있는 범위)

var hello = "hello";

// function sayHello() {
//   var hello = "hello hello";
//   console.log(hello);
// }

// sayHello();
// console.log(hello);

if (true) {
  var hello = "hello hello";
  console.log(hello);
}

console.log(hello);
// if는 함수스코프가 아니기 때문에 재선언 됨
