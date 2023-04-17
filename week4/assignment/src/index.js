const carForm = document.getElementById("car");
const carInput = document.getElementById("car-names-input");
const gameResult = document.getElementById("result");
const gameWinner = document.getElementById("racing-winners");

let newCar = "";

carForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newCar = carInput.value;
  newCar = newCar.split(",").map((name) => name.trim());
  newCar.forEach((n) => {
    if (n.length > 5) {
      alert("5글자 이하로 입력하세요 -_-");
      carInput.value = "";
      return;
    }
  });
});

function addCarToList(car, n) {
  const newDiv = document.createElement("div");
  newDiv.id = "new-div";
  gameResult.append(document.createElement("br"));
  gameResult.append(document.createElement("br"));
  gameResult.appendChild(newDiv);

  // if (car.length == 0) {
  //   alert("자동차 이름을 입력하세요.");
  //   return;
  // }
  // const new_game = document.createElement("p");
  // new_game.innerText =
  //   "********************** [NEW GAME] **********************";
  // gameResult.appendChild(new_game);

  // car = car.split(",").map((name) => name.trim());

  // car.forEach((name) => {
  //   if (name.length > 5) {
  //     alert("5글자 이하로 입력하세요 -_-");
  //     return;
  //   }
  // });

  //알바하면서 car[i]중에 length가 5이하가 아닐경우 재입력하도록 하기
  let score = [];
  for (let i = 0; i < car.length; i++) {
    score.push("");
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < car.length; j++) {
      if (car[j] !== "") {
        let tem = Math.floor(Math.random() * 10);
        if (tem >= 4) {
          score[j] += "-";
        }
        const makeDiv = document.createElement("div");
        makeDiv.textContent = `${car[j]}: ${score[j]}`;
        newDiv.appendChild(makeDiv);
      }
    }
    newDiv.appendChild(document.createElement("br"));
  }

  console.log(score);

  let winnerIdx = [];
  let max_score = Math.max(...score.map((s) => s.length));
  /*Math.max안에 배열을 넣을때는 꼭 ...을 이용해서 리스트를 풀어줘야 한다! */

  score.forEach((e, idx) => {
    if (e.length == max_score) {
      winnerIdx.push(idx);
    }
  });

  // let winner = "";

  // winnerIdx.forEach((i, index) => {
  //   winner += `${car[i]}`;
  //   if (index < winnerIdx.length - 1) {
  //     winner += ", "; 이렇게 하지말고 join을 이용해서 쉼표로 구분해보자!
  //   }
  // });

  let winner = [];
  winnerIdx.forEach((i) => {
    winner.push(car[i]);
  });
  winner = winner.join(", ");

  gameWinner.innerText = winner;

  carInput.value = "";
  countInput.value = "";
}

const countInput = document.getElementById("racing-count-input");
const countForm = document.getElementById("count");
const countBtn = document.getElementById("racing-count-submit");

function countGame() {
  addCarToList(newCar, countInput.value);
}

countBtn.onclick = countGame;
