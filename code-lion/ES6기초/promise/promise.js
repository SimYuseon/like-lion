// 동기적으로 작동하는 js를 코드의 흐름에 맞춰 비동기적으로 실행시키기 위해 콜백함수를 이용
// => 콜백지옥 발생 =>promise 사용
// then도 많이 쓰면 복잡해지는 문제 발생 =>async await 사용

// promise 세가지 상태
// pending 대기
// pullfilled 이행
// reject 실패

function sayHello() {
  return new Promise((resolve, reject) => {
    // const hello = "hello hello";
    resolve("hello!!!");
    // reject(new Error());
  });
}

// sayHello()
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function test() {
  const hello = await sayHello();
  console.log(hello);
}
test();
