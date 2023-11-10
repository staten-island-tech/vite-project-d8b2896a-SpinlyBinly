import "../css/style.css";
import { opps, name } from "./array";
console.log(opps[0] + " is a major opp, 100% facts");
//forEach person in opps insert adj? html
//input type check box
//event listener - filter array (2 items)
//another checkbox to change theme (light and dark)

const DOMSelectors = {
  formID: document.querySelector("#formID"),
  bookTitle: document.querySelector("#bookTitle"),
  bookAuthor: document.querySelector("#bookAuthor"),
  bookCover: document.querySelector("#bookCover"),
  h2s: document.querySelectorAll("h2"),
  container: document.querySelector(".container"),
  button: document.querySelector(".btn"),
};

function makeCard() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
      <h2>Book Title: ${bookTitle.value} </h2>
      <h2> Book Author: ${bookAuthor.value} </h2>  
      <img src="${bookCover.value}" alt="">`
  );
}
