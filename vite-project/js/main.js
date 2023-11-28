import "../css/style.css";
import { opps } from "./array.js";
console.log(opps[0] + " is a major opp, 100% facts");

const DOMSelectors = {
  container: document.querySelector(".container"),
  lightButton: document.querySelector("#lightButton"),
  darkButton: document.querySelector("#darkButton"),
  winButton: document.querySelector("#winButton"),
  loseButton: document.querySelector("#loseButton"),
  tieButton: document.querySelector("#tieButton"),
  h2s: document.querySelectorAll("h2"),
  container: document.querySelector(".container"),
  button: document.querySelector(".btn"),
};

function clearFields() {
  DOMSelectors.container.innerHTML = "";
}

DOMSelectors.winButton.addEventListener("click", function () {
  const wins = opps.filter((win) => win.janeWin === true);
  clearFields();
  wins.forEach((win) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<h1>${win.firstName} ${win.lastName}</h1>`
    );
  });
});

DOMSelectors.loseButton.addEventListener("click", function () {
  const losses = opps.filter((loss) => loss.janeWin === false);
  clearFields();
  losses.forEach((loss) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<h1>${loss.firstName} ${loss.lastName}</h1>
      <img id="img" src="${loss.img}" class="">
      <h3 id="h3" class="">${loss.description}</h3>`
    );
  });
});

DOMSelectors.tieButton.addEventListener("click", function () {
  const ties = opps.filter((tie) => tie.janeTie === true);
  clearFields();
  ties.forEach((tie) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<h1>${tie.firstName} ${tie.lastName}</h1>`
    );
  });
});

document.querySelector(".themeBTN").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});
s;
