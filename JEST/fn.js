// 함수들을 모아둠

const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),
  student: (name, age) => ({ name, age, gender: undefined }),
};

module.exports = fn;
