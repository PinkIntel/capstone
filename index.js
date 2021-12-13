// window.alert("Hello! I'm working!");

// importing all as a Module object
//import * as components from "./components";

// importing all FUNCTIONAL components by name
import { Nav, Main, Footer } from "./components";

//WE'RE MAKING AN ALGORITHM HERE!!!! First, declare a function named render
function render() {
  //inside the function, query the DOM for the root <div> and set its innerHTML property to a template literal.
  //Inside the template literal, call each of the functional components in the order you want them to appear on the page
  document.getElementById("root").innerHTML = `
  ${Nav()}
  ${Main()}
  ${Footer()}
  `;
}
//call render in the body of index.js
render();

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
