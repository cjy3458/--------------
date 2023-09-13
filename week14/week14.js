//1. setTimeout의 delay가 보장이 안되는 예시
// 동기처리가 끝나야 비동기함수 처리가 된다는 걸 알 수 있음

// const delay = () => {
//   for (let _ = 0; _ < 10000; _++) {
//     console.log("");
//   }
// };

// console.time();
// console.log("동길이동길");

// delay();

// setTimeout(() => {
//   console.log("setTimeout");
//   console.timeEnd();
// }, 1000);

// console.log("end");

// 2. 콜스택이 안 비었을때 비동기 함수가 실행이 안되는 예시

// const delay = () => {
//   for (let _ = 0; _ < 10000; _++) {
//     console.log("");
//   }
// };

// console.time();
// console.log("동길이동길");

// delay();

// setTimeout(() => {
//   console.log("setTimeout");
//   console.timeEnd();
// }, 0);

// console.log("end");

// 3. 테스크 큐보다 마이크로 테스크큐가 우선순위가 높다는걸 보여주는 예시

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// console.log("console");

// Promise.resolve("promise").then((res) => console.log(res));

// 4. 동기처리 + setTimeout + Promise

// setTimeout(() => {
//   console.log("셋탐아웃1");
// }, 0);

// setTimeout(() => {
//   console.log("셋탐아웃2");
// }, 500);

// console.log("동길1");
// Promise.resolve("Promise").then((res) => console.log(res));
// console.log("2동길");

// setTimeout(() => {
//   console.log("셋탐아웃3");
// }, 0);

// 5. async await

async function promiseAsync() {
  return "Promise";
}

async function solution() {
  console.log("솔루션 시작!");
  const result = await promiseAsync();
  console.log("async/await result:", result); // 비동기를 만났기 때문에 여기서 멈춤
  console.log("솔루션 끝!"); // 동기지만 앞에 await이 있기 때문에 await이 끝날 때까지 콜스택에 들어가지 않음!
}

console.log("file start");
solution();
console.log("file end");
