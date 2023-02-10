// funtion 대신 간단하게 사용가능
// 코드 한줄시 중괄호, return 생략가능

// const foo = (x, y) => x + y;
// console.log(foo(1, 5));

const foo = (x, y) => {
  console.log("2줄 이상");
  return x + y;
};
console.log(foo(1, 5));
