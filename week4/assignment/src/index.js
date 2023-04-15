const carForm = document.getElementById("car");
const carInput = document.getElementById("car-names-input");
const carList = document.getElementById("app");

function addCarToList(car) {
  const newCar = car.split(",").map((name) => name.trim());
  newCar.forEach((n) => {
    if (n !== "") {
      const makeDiv = document.createElement("div");
      makeDiv.textContent = `${n}:`;
      carList.appendChild(makeDiv);
    }
  });
}

carForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCar = carInput.value;
  addCarToList(newCar);
  carInput.value = "";
});
