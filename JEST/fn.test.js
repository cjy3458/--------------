// // 아까 만든 함수 불러오기
const fn = require("./fn");

// // 테스트에 대한 설명

// test("1은 1이야", () => {
//   expect(1).toEqual(1); // expect 검증값, toBe 기대값
// });

// // toBe = 값 toEqual = 객체나 배열 비교

// test("2+3은 5야", () => {
//   expect(fn.add(2, 3)).toBe(5); // Matcher
// });

// // 테스트 실패
// test("3+3은 5야", () => {
//   expect(fn.add(3, 3)).toBe(5);
// });

// // 객체는 toEqual 사용 toEqual = 값을 포함하기만 하면 true

// test("이름과 나이를 전달받아서 객체 반환", () => {
//   expect(fn.makeUser("Jay", 30)).toEqual({
//     name: "Jay",
//     age: 30,
//   });
// });

// // toStrictEqual 더 엄격한 비교, 완전히 똑같아야 true

// test("이름과 나이를 전달받아서 객체 반환", () => {
//   expect(fn.makeUser("Jay", 30)).toStrictEqual({
//     name: "Jay",
//     age: 30,
//   });
// });

// // toStrictEqual 확인

// test("학생 객체 반환", () => {
//   expect(fn.student("Jay", 30)).toStrictEqual({
//     name: "Jay",
//     age: 30,
//   });
// });

// // toStrictEqual 충족
// test("학생 객체 반환", () => {
//   expect(fn.student("Jay", 30)).toStrictEqual({
//     name: "Jay",
//     age: 30,
//     gender: undefined,
//   });
// });

// //toBeNull
// //toBeUndefined

// test("null은 null입니다.", () => {
//   expect(null).toBeNull();
// });

// test("언디", () => {
//   expect(undefined).toBeUndefined();
// });

// // 예외처리

// test("에러가 발생했나요?", () => {
//   expect(() => fn.throwErr()).toThrow("403 Forbidden");
// });

// 이렇게 시도하면 1초만에 성공함 왜?
// jest는 코드 실행이 맨 아래에 도달하게 되면 그대로 끝난다.
// 그래서 3초뒤 실행 예정이었던 함수가 실행되지 않는 것.
// 비동기 코드를 테스트할 때는 done이라는 콜백함수를 인자로 전달해주면 됌!
// 이 done함수가 끝날 때까지 test 함수는 끝나지 않음

// test("3초 후 Jay를 반환", () => {
//   function callback(name) {
//     expect(name).toEqual("a");
//   }
//   fn.getName(callback);
// });

test("3초 후 Jay를 반환??", (done) => {
  function callback(name) {
    expect(name).toEqual("Jay");
    done();
  }
  fn.getName(callback);
});

// Promise 패턴은 async await을 이용해 테스트가 가능

test("3초 후 나이 반환", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});
