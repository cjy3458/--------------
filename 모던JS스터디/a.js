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

// const btn = document.getElementById("btn");
// const container = document.getElementById("container");
// const input = document.getElementById("input");
// const delBtn = document.getElementById("delBtn");

// function createDiv() {
//   const makeDiv = document.createElement("div");
//   let makeLi = document.createElement("li");
//   let makeDel = document.createElement("button");
//   makeDiv.id = "container4";
//   makeLi.innerText = input.value;
//   makeLi.id = "lili";
//   makeDel.innerText = "X";
//   makeDel.id = "delBtn";
//   makeDiv.appendChild(makeLi);
//   makeDiv.appendChild(makeDel);
//   container.appendChild(makeDiv);
//   const delBtn = document.getElementById("delBtn");

//   delBtn.addEventListener("click", delDiv);

//   input.value = "";
// }

// function delDiv(e) {
//   //삭제 버튼(x) 클릭시
//   let del = e.target.parentElement; //선택한 목록 한개만 지우기(부모 객체를 지운다)
//   del.remove();
// }

// btn.addEventListener("click", createDiv);

// console.log(jay);
// let jay;

// console.log(jay);
// jay = 12;

// console.log(jay);

// 바인딩이란 변수를 예로 들면 변수에 해당 기본 단위가 가질 수 있는 속성 중에서 일부 필요한 속성만을 선택하여 연결해주는 것

const stringObj = new String("Jay");
// String 생성자 함수를 이용해 문자열 객체 생성

console.log(stringObj.length);
// String의 프로토타입 메서드인 .length를 사용가능

let NumberObj = new Number(25);
// Number 생성자 함수를 이용해 숫자 객체 생성

NumberObj = NumberObj.toString;
console.log(typeof NumberObj.toString());
// Number의 프로토타입 메서드인 .toString() 사용가능

const name = "Jae Young";
// 래퍼 객체가 생성되어 메서드를 상속받아 사용 가능

console.log(name.length); // 9
console.log(name.toUpperCase()); // JAE YOUNG

// 접근 및 메서드 호출 후, 다시 원시값
console.log(typeof name); // object가 아닌 string 출력

// 전역 객체 arr
var arr = [1, 2, 3];

// window.Array를 이용해 Array에 접근한 후 isArray(arr) 메서드를 이용해 arr이 array인지 확인
console.log(window.Array.isArray(arr));

// 양의 무한대
console.log(3 / 0);

// 음의 무한대
console.log(-25 / 0);

//Infinity는 숫자값
console.log(typeof Infinity); // number

console.log(Number("Jay")); // NaN

console.log(25 * "Jae Young"); // NaN

console.log(typeof NaN); // number

// 표현식
eval("1+2;"); // 3

// 표현식 X
eval("var x = 5;"); // undefined

// eval 함수에 의해 런타임에 var x = 5 변수 선언문 실행
console.log(x);

isFinite(0);
isFinite("10"); // 숫자가 아닌 경우, 숫자로 타입 변환 후 검사

isFinite(Infinity);
isFinite(NaN); // NaN으로 평가되는 값은 false

isNaN(NaN); // true
isNaN(10); // false

isNaN("JaeYoung"); // 숫자로 타입 변환 후 검사 true
isNaN("10"); // false

var x = 10; // 전역 변수

function de() {
  // 선언하지않은 식별자에 값을 할당
  y = 20; // window.y = 20;
}

de();

// 선언하지않은 식별자 y를 전역에서 참조 가능
console.log(x + y);

/*foo함수 내부에 y = 20;이 실행되면 참조 에러가  발생하지 않고, 전역 변수처럼 사용된다.
전역 객체의 프로퍼티로 등록되어 참조되기 때문이다.
하지만 y는 변수 선언 없이 단지 전역 객체의  프로퍼티로 추가되었을 뿐이다.
y는 변수가 아니다. 따라서 변수 호이스팅도 발생하지  않는다 */

const circle = {
  radius: 5,
  getDiameter() {
    // this는 메서드를 호출한 객체를 가리킴
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter()); // 10

// 전역에서 this는 전역 객체 window를 가리킴
console.log(this); // window

function square(number) {
  console.log(this); // 일반 함수 내부에선 this는 전역 객체 window를 가리킴
  return number * number;
}

square(2); // window
console.log(square(2)); // 4

const person = {
  name: "Jay",
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this); // {name: "Jay", getName: function}
    return this.name;
  },
};

console.log(person.getName()); // "Jay";

const foo = function () {
  console.dir(this);
};

// 1. 일반 함수 호출
// 일반적인 방식으로 호출
// foo함수의 this는 전역 객체 window를 가리킴
foo();

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수를 프로퍼티 값으로 할당하여 추출
const obj = { foo };
obj.foo();

// 3. 생성자 함수 호출
// new 연산자와 함께 생성자 함수로 호출
// 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo(); // foo {}

function fooo() {
  console.log(this); // window
}

fooo();

const student = {
  // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
  name: "Jae Young",
  getName() {
    return this.name;
  },
};

// 메서드 getName을 호출한 객체는 student이다.
console.log(student.getName()); // Jae Young

function Circle(r) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스
  this.r = r;
  this.getDiameter = function () {
    return 2 * this.r;
  };
}

const circle1 = new Circle(5);
console.log(circle1.getDiameter());

// mkdir json-server-exam

// cd json-server-exam

// npm init -y

// npm install json-server --save-dev // json서버 설치 코드

// npm install -g json-server

// json-server watch db.json

// json-server --watch db.json --port 5000
