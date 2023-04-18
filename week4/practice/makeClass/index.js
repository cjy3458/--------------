class 반 {
  constructor() {
    this.학생들 = [];
  }
  입학시키기(학생) {
    this.학생들.push(학생);
  }
  청소해() {
    this.학생들.forEach((학생) => {
      학생.청소하기();
    });
  }
}

class 학생 {
  constructor(inputName, inputAge) {
    this.이름 = inputName;
    this.나이 = inputAge;
  }
  청소하기() {
    /*이게 메서드야! */
    console.log(`${this.이름}!!! 청소 실시!`);
  }
}

class 화장실청소 extends 학생 {
  constructor(inputName, inputAge) {
    /*이건 생성자야 */
    super(inputName, inputAge); /*이건 상속된 클래스에 무언가를 받아오는거야 */
  }
  청소하기() {
    console.log(`난 왜 화장실이야....`);
  }
}

class 창문닦이 extends 학생 {
  constructor(inputName, inputAge) {
    super(inputName, inputAge);
  }
  청소하기() {
    console.log(`${this.이름}!!! 창문닦기 실시!`);
  }
}

class 책상닦이 extends 학생 {
  constructor(inputName, inputAge) {
    super(inputName, inputAge);
  }
  청소하기() {
    console.log(`${this.이름}!!! 책상닦기 실시!`);
  }
}

const 떡잎유치원 = new 반(); /*컨스트럭터에 인자가 없어서 빈 괄호 ㄱㅊ */
const 재영이 = new 학생("재영", 25);
const 동길이 = new 창문닦이("길동", 24);
const 규한이 = new 책상닦이("규한", 24);
const 선영이 = new 화장실청소("선영", 26);

/*콜백 함수? */
[재영이, 동길이, 규한이, 선영이].forEach((학생) => {
  떡잎유치원.입학시키기(학생);
});

떡잎유치원.청소해();
