// 함수들을 모아둠

const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),
  student: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("403 Forbidden");
  },
  getName: (callback) => {
    const name = "Jay";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },

  getAge: () => {
    const age = 30;
    return new Promise((res) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
};

module.exports = fn;
