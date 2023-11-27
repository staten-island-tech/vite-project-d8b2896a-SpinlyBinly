import "../css/style.css";
import { opps } from "./array.js";
console.log(opps[0] + " is a major opp, 100% facts");
//forEach person in opps insert adj? html
//input type check box
//event listener - filter array (2 items)
//another checkbox to change theme (light and dark)

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

DOMSelectors.lossButton.addEventListener("click", function () {
  const losses = opps.filter((loss) => loss.janeWin === true);
  clearFields();
  losses.forEach((loss) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<h1>${loss.firstName} ${loss.lastName}</h1>`
    );
  });
});

DOMSelectors.tieButton.addEventListener("click", function () {
  const ties = opps.filter((tie) => (tie.tie === true));
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
} else{
  document.body.classList.add("dark");
  document.body.classList.remove("light");
}
});


