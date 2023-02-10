// 비구조할당 : 객체, 배열안의 값을 추출해서 변수, 상수에 바로 선언하는 문법

// 객체 비구조화 할당
const object = { a: 1, b: 2 };

// const a = object.a;
// const b = object.b;

// const { a, b } = object;
// console.log(a, b);

// 배열 비구조화 할당
const array = [1, 2];

const [one, two] = array;
console.log(one, two);
