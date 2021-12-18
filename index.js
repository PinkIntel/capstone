// window.alert("Hello! I'm working!");

// importing all as a Module object
//import * as components from "./components";

// importing all FUNCTIONAL components by name
import { Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

//in the PAGE part of the router function, the colon is for the info that comes after the / symbol in your browswer bar. It's a query string to add on to the slash.

//WE'RE MAKING AN ALGORITHM HERE!!!! First, declare a function named render
//inside the function, query the DOM for the root <div> and set its innerHTML property to a template literal.
//Inside the template literal, call each of the functional components in the order you want them to appear on the page

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer(st)}
  `;
  router.updatePageLinks();
}

render(state.Home);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
