// console.log({} === {});
// console.log([] === []);

// const number = 10;

// function young() {
//   const number = 20;
//   console.log(number);
// }

// young();

// console.log(number);

// num = "10";

// console.log(num === 10);
// console.log(num == 10);

// {
//   let a = 1;
// }

// console.log(a);

// if (a == undefined) {
//   const b = 10;
//   console.log(b);
// }

// console.log(b);

// let a = 10 + "1";
// let b = "11" - 1;
// console.log(typeof a);
// console.log(typeof b);

// const original = {
//   props: 10,
// };
// const diff = {
//   props: 10,
// };

// const copy = original;

// console.log(original === diff);
// console.log(original.props === diff.props);
// copy.props = 20;
// console.log(original.props);

// [1, 2, 3].keys;

var origin = 10;
var copy = origin;

console.log(origin, copy); // 1번 콘솔
copy = 20;
console.log(origin, copy); // 2번 콘솔

var student = {
  name: "Jay",
  age: 16,
};

var copied = student;
copied.name = "Young";

console.log(student.name); // 1번 콘솔
console.log(student === copied); // 2번 콘솔

let g = 10;
let h = 10;

let gam = [1, 2, "a"];
let ham = [1, 2, "a"];

console.log(g === h); // 1번 콘솔
console.log(gam === ham); // 2번 콘솔

let global = "global";

function jay() {
  let local = "local";
  console.log(global); // 전역 스코프라 함수 내에서도 참조 가능
  console.log(local); // 지역 스코프라 지역 내에서 참조 가능
}

jay();

console.log(global);
console.log(local); // 지역 스코프라 지역 밖에서는 유효하지 않음

function add() {
  var x = 1;
  var x = 2;

  console.log(x);
}

function add() {
  let x = 1;
  let x = 2;

  console.log(x);
}

var x = 1;

if (ture) {
  var x = 10;
}

console.log(x);

var a = 1;

function jay() {
  var a = 10;
  young();
}

function young() {
  console.log(a);
}

let choijaeyoung = 24;

function(){num=aux(num);return num;}