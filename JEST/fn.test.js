// // // 아까 만든 함수 불러오기
// const fn = require("./fn");

// // 테스트에 대한 설명 친저하게
// test("1은 1이야", () => {
//   expect(1).toEqual(1); // expect 검증값, toBe 기대값
// });

// test("2+3은 5야", () => {
//   expect(fn.add(2, 3)).toEqual(5); // Matcher
// });

// test("3+3은 5야", () => {
//   expect(fn.add(3, 3)).toEqaul(5);
// });

// test("이름과 나이를 전달받아서 객체 반환", () => {
//   expect(fn.makeUser("Jay", 30)).toEqual({
//     name: "Jay",
//     age: 30,
//   });
// });

//객체는 재귀적으로 값을 확인해야 하기 때문에 toEqual을 사용

test("이름과 나이를 전달받아서 객체 반환", () => {
  expect(fn.makeUser("Jay", 30)).toEqual({
    name: "Jay",
    age: 30,
  });
});

test("이름과 나이를 전달받아서 객체 반환", () => {
  expect(fn.makeUser("Jay", 30)).toStrictEqual({
    name: "Jay",
    age: 30,
  });
});

test("학생 객체 반환", () => {
  expect(fn.student("Jay", 30)).toEqual({
    name: "Jay",
    age: 30,
  });
});

test("학생 객체 반환", () => {
  expect(fn.student("Jay", 30)).toStrictEqual({
    name: "Jay",
    age: 30,
    // gender: undefined,
  });
});

//toBeNull
//toBeUndefined
//toBeDefined

test("null은 null입니다.", () => {
  expect(null), toBeNull();
});
