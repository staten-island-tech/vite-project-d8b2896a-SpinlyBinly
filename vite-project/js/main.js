import "../css/style.css";
import { opps } from "./array.js";

const DOMSelectors = {
  container: document.querySelector(".container"),
  winButton: document.querySelector("#winButton"),
  loseButton: document.querySelector("#loseButton"),
  tieButton: document.querySelector("#tieButton"),
  h2s: document.querySelectorAll("h2"),
  container: document.querySelector(".container"),
  buttons: document.querySelectorAll(".btn"),
  img: document.querySelector(".img"),
};

function clearFields() {
  DOMSelectors.container.innerHTML = "";
}

function populate(arr) {
  arr.forEach((el) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class=card><h1>${el.firstName} ${el.lastName}</h1>
      <img class="imgs" src="${el.img}" alt="">
      <h3 id="h3" class="">${el.description}</h3>
      </div>`
    )
  );
}

populate(opps);
function filters() {
  DOMSelectors.buttons.forEach((btn) =>
    btn.addEventListener("click", function () {
      let category = btn.textContent.toLowerCase();
      let newArr = opps.filter((el) => el.janeWin.includes(category));
      clearFields();
      populate(newArr);
    })
  );
}
filters();

document.querySelector("#themeBTN").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
  populate(opps);
});

/* DOMSelectors.winButton.addEventListener("click", function () {
  const wins = opps.filter((win) => win.janeWin.includes("true"));
  clearFields();
  wins.forEach((win) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class=card><h1>${win.firstName} ${win.lastName}</h1>
      <img class="imgs" src=${win.img} alt=>
      <h3 id=h3 class=>${win.description}</h3>
      </div>`
    );
  });
});

DOMSelectors.loseButton.addEventListener("click", function () {
  const losses = opps.filter((loss) => loss.janeWin.includes("false"));
  clearFields();
  losses.forEach((loss) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class=card><h1>${loss.firstName} ${loss.lastName}</h1>
      <img class="imgs"src="${loss.img}" alt="">
      <h3 id="h3" class="">${loss.description}</h3>
      </div>`
    );
  });
});

DOMSelectors.tieButton.addEventListener("click", function () {
  const ties = opps.filter((tie) => tie.janeWin.includes("tie"));
  clearFields();
  ties.forEach((tie) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class=card><h1>${tie.firstName} ${tie.lastName}</h1>
      <img class="imgs" src="${tie.img}" alt="">
      <h3 id="h3" class="">${tie.description}</h3>
      </div>`
    );
  });
}); */
