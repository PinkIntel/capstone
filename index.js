// window.alert("Hello! I'm working!");

// importing all as a Module object
//import * as components from "./components";

// importing all FUNCTIONAL components by name
import { Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import { createClient } from "pexels";
import axios from "axios";

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

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

import dotenv from "dotenv";
dotenv.config();

// let response = fetch("https://api.pexels.com/v1/collections/gtwusmq/", {
//   headers: {
//     Authorization: "563492ad6f9170000100000196112a16e0864873bea10bedd5ff8bf0"
//   }
// }).then(resp => {
//   return resp.json();
// });
function getGallery() {
  axios
    .get("https://api.pexels.com/v1/collections/gtwusmq/", {
      headers: {
        Authorization:
          "563492ad6f9170000100000196112a16e0864873bea10bedd5ff8bf0"
      }
    })
    .then(response => {
      let result = response.data.media;

      result.map(image => {
        let newPhoto = document.createElement("img");
        newPhoto.setAttribute("src", `${image.src.large2x}`);
        document.querySelector(".galleryContainer").appendChild(newPhoto);
      });
    });
}

getGallery();

// function getPhotos() {
//   response.media.map(image => {
//     let pexels = `<div class="gallery_images">
//              <img src=${image.src.original} />
//         </div>`;
//     galleryContainer.innerHTML += pexels;
//   });
// }
// getPhotos();

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
