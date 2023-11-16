import "../css/style.css";
import { opps, name } from "./array";
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

DOMSelectors.formID.addEventListener("submit", function (event) {
  event.preventDefault();
  makeCard();
  clearFields();
  function remove() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.currentTarget.parentElement.remove();
      });
    });
  }
  remove();
});
