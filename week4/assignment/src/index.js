const carForm = document.getElementById("car");
const carInput = document.getElementById("car-names-input");
const carList = document.getElementById("app");
let newCar = "";

function addCarToList(car, n) {
  if (car.length == 0) {
    alert("자동차 이름을 입력하세요.");
    return;
  }
  const new_game = document.createElement("p");
  new_game.innerText =
    "********************** [NEW GAME] **********************";
  carList.appendChild(new_game);
  car = car.split(",").map((name) => name.trim());
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
        carList.appendChild(makeDiv);
      }
    }
    const br = document.createElement("br");
    carList.appendChild(br);
  }

  let winner = [];
  let max_score = Math.max(score.map((s) => s.length));
  score.forEach((s, idx) => {
    if (s == max_score) {
      winner.push(idx);
    }
  });
  console.log(winner);

  carInput.value = "";
  countInput.value = "";
}

carForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newCar = carInput.value;
});

const countInput = document.getElementById("racing-count-input");
const countForm = document.getElementById("count");
const countBtn = document.getElementById("racing-count-submit");

function countGame() {
  // const number = countInput.value;
  addCarToList(newCar, countInput.value);
}

countBtn.onclick = countGame;
