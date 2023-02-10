// let : 값을 재정의 할 수 있는 변수 선언 방식
// 재정의(초기화)가능, 재선언불가
// 중괄호 스코프
let hello = "first hello";

// hello = "second hello";
console.log(hello);

if (true) {
  let hello = "second hello";
  console.log(hello);
}
console.log(hello);
