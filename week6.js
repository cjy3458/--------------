// let angel = {
//   name: "재영",
//   age: 21,
//   name2: ["재", "영"],
//   sayHello() {
//     alert("hello, hello");
//   },
// };

// const person = {
//   name: "이름",
// };

// console.log(angel.name[0]);

// console.log(angel.name);
// console.log(angel["age"]);

// angel.age = 25;
// console.log(angel.age);

// let a = new Object();
// a.name = "zzalng";

// console.log(a);

// class who {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const Jay = new who("Jay", 21);

// console.log(Jay);

// class 학생 {
//   constructor(inputName, inputAge) {
//     this.이름 = inputName;
//     this.나이 = inputAge;
//   }
//   get 자기소개() {
//     return `내 이름은 ${this.이름}! ${this.나이}살이야!`;
//   }
//   set 자기소개(a) {
//     console.log("건들지마");
//   }
// }

// const 토심이 = new 학생("토심이", 2);

// console.log(토심이.자기소개);
// 토심이.자기소개 = "난 토심이야";

// const 최재영 = new 학생("최재영", 21);
// const 재영이 = new 학생("재영이", 3);

// console.log(최재영.자기소개);
// console.log(재영이.자기소개);

// const 학생들 = [];
// for (let i = 0; i < 100; i++) {
//   학생들.push(new 학생(`${i + 1}번 학생`, 17));
// }

// class 스튜던트 {
//   constructor(n, a, m) {
//     this.이름 = n;
//     this.나이 = a;
//     this.학과 = m;
//   }
//   get 소개() {
//     return `내 이름은 ${this.이름}! ${this.나이}살이야!`;
//   }
// }

// class 고등학생 extends 스튜던트 {
//   constructor(n, a, m) {
//     super(n, a, m);
//   }
// }

// class 대학생 extends 스튜던트 {
//   constructor(n, a, m, alchol) {
//     super(n, a, m);
//     this.alchol = alchol;
//   }
// }

// const 현엽이 = new 대학생("현엽이", 25, "산업보안", "5병");
// console.log(현엽이.소개);
// console.log(현엽이);

const btn = document.getElementById("btn");
const container = document.getElementById("container");
const input = document.getElementById("input");
const delBtn = document.getElementById("delBtn");

function createDiv() {
  const makeDiv = document.createElement("div");
  let makeLi = document.createElement("li");
  let makeDel = document.createElement("button");
  makeDiv.id = "container4";
  makeLi.innerText = input.value;
  makeLi.id = "lili";
  makeDel.innerText = "X";
  makeDel.id = "delBtn";
  makeDiv.appendChild(makeLi);
  makeDiv.appendChild(makeDel);
  container.appendChild(makeDiv);
  const delBtn = document.getElementById("delBtn");

  delBtn.addEventListener("click", delDiv);

  input.value = "";
}

function delDiv(e) {
  //삭제 버튼(x) 클릭시
  let del = e.target.parentElement; //선택한 목록 한개만 지우기(부모 객체를 지운다)
  del.remove();
}

btn.addEventListener("click", createDiv);

console.log(jay);
let jay;

console.log(jay);
jay = 12;

console.log(jay);
