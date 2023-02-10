// const : 값을 재정의 할 수 없는 상수 선언 방식
// 재정의(초기화), 재선언불가
// 중괄호 스코프
const hello = "first hello";
// hello = "second hello";

if (true) {
  const hello = "second hello";
  console.log(hello);
}

console.log(hello);
