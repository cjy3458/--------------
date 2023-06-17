const button = document.querySelector("button");

let modal;
let backdrop;

button.addEventListener("click", showModal);

function showModal() {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.className = "modal";

  const modalText = document.createElement("p");
  modalText.textContent = "Really?";
  modalText.className = "modalTitle";

  const modalCancle = document.createElement("button");
  modalCancle.textContent = "Cancel";
  modalCancle.className = "btn btn--alt";
  modalCancle.addEventListener("click", closeModal);

  const modalConfirm = document.createElement("button");
  modalConfirm.textContent = "confirm";
  modalConfirm.className = "btn";
  modalConfirm.addEventListener("click", closeModal);

  modal.append(modalText);
  modal.append(modalCancle);
  modal.append(modalConfirm);

  document.body.append(modal);

  backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  backdrop.addEventListener("click", closeModal);

  document.body.append(backdrop);
}

function closeModal() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}

const printName = (n) => {
  console.log(n);
};

printName("Jay");

class Human {
  // 클래스
  gender = "male";

  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  // extends를 이용해 상속받아 만든 클래스
  name = "Jay"; // 프로퍼티
  gender = "Female";

  call = () => {
    console.log(`${this.name}이에요!`);
  }; // 메소드
}

const myPerson = new Person();

myPerson.call();
myPerson.printGender();

const num = [1, 2, 3];
const oldNum = [...num, 4, 5]; // spread

console.log(oldNum[3]);

const sortArray = (...arr) => {
  console.log(arr);
};

sortArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const me = {
  name: "jaeyoung",
};

const newMe = {
  ...me,
  age: 25,
};

console.log(newMe.name, newMe.age);
