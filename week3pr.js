const button = document.querySelector("#button");

function changeScore(type) {
  const mScore = document.querySelector("#result");
  const cScore = document.querySelector("#com-result");

  let myScore = mScore.innerText;
  let comScore = cScore.innerText;

  if (type === "win") {
    myScore = parseInt(myScore) + 1;
    comScore = parseInt(comScore) + 1;

    mScore.innerText = myScore;
    cScore.innerText = comScore;
  }
}

button.onclick = changeScore("win");
