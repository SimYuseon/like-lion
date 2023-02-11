function 바깥함수(param) {
  const 상태 = param;

  return function 안쪽함수(매개변수) {
    return 상태 + 매개변수;
  };
}

const 안쪽함수 = 바깥함수();
const a = console.log(안쪽함수(200));
