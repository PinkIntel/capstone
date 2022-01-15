/* eslint-disable no-prototype-builtins */
// window.alert("Hello! I'm working!");
// importing all as a Module object
//import * as components from "./components";
// importing all FUNCTIONAL components by name
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import { createClient } from "pexels";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo(window.location.origin);

//in the PAGE part of the router function, the colon is for the info that comes after the / symbol in your browswer bar. It's a query string to add on to the slash.

//WE'RE MAKING AN ALGORITHM HERE!!!! First, declare a function named render
//inside the function, query the DOM for the root <div> and set its innerHTML property to a template literal.
//Inside the template literal, call each of the functional components in the order you want them to appear on the page

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer(st)}
    `;
  router.updatePageLinks();
  addEventListeners(st);
}
// render(state.Home);
function getGallery() {
  console.log(state.Home.gallery);
  let gallery = state.Home.gallery;
  gallery.map(image => {
    console.log("hi");
    let newPhoto = document.createElement("img");
    newPhoto.setAttribute("src", `${image.src.large2x}`);
    document.querySelector(".galleryContainer").appendChild(newPhoto);
  });
}
// console.log("view, st.view");
function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  document.querySelector("#session-button").addEventListener("click", event => {
    event.preventDefault();
    render(state.Forms);
  });

  document.querySelector("#logo").addEventListener("click", event => {
    event.preventDefault();
    render(state.Home);
  });

  if (st.view === "Home") {
    getGallery();
  }

  if (st.view === "Forms") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // const form = [];
      // // Interate over the form input group elements
      // for (let input of inputList.form) {
      //   // If the value of the checked attribute is true then add the value to the forms array
      //   if (input.checked) {
      //     form.push(input.value);
      //   }
      // }

      const requestData = {
        name: inputList.name.value,
        phone: inputList.phone.value,
        address: inputList.address.value,
        city: inputList.city.value,
        state: inputList.state.value,
        zipcode: inputList.zipcode.value,
        email: inputList.email.value,
        sessiontype: inputList.sessiontype.value,
        starttime: inputList.starttime.value,
        endtime: inputList.endtime.value,
        people: inputList.people.value,
        theme: inputList.theme.value,
        package: inputList.package.value,
        addons: inputList.addons.value,
        details: inputList.details.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.CAPSTONE_FORMS_API_URL}`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          state.Sessions.sessions.push(response.data);
          router.navigate("/Sessions");
        })
        .catch(error => {
          console.log("OH NU IT DIDN'T WORK", error);
        });
    });
  }
}
router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";
    switch (page) {
      case "Home":
        axios
          .get("https://api.pexels.com/v1/collections/gtwusmq/", {
            headers: {
              Authorization:
                "563492ad6f9170000100000196112a16e0864873bea10bedd5ff8bf0"
            }
          })
          .then(response => {
            let result = response.data.media;
            state.Home.gallery = result;
            console.log(state.Home.gallery);
            done();
          });
        break;
      case "Sessions":
        axios
          .get(`${process.env.CAPSTONE_FORMS_API_URL}`)
          .then(response => {
            // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
            state.Sessions.sessions = response.data;
            done();
            // router.navigate("/Forms");
          })
          .catch(error => {
            console.log("OH NU IT DIDN'T WORK", error);
          });
        break;

      default:
        done();
    }
    // if (page === "Home") {
    //   axios
    //     .get("https://api.pexels.com/v1/collections/gtwusmq/", {
    //       headers: {
    //         Authorization:
    //           "563492ad6f9170000100000196112a16e0864873bea10bedd5ff8bf0"
    //       }
    //     })
    //     .then(response => {
    //       console.log("axios thingy");
    //       let result = response.data.media;
    //       state.Home.gallery = result;
    //       console.log(state.Home.gallery);
    //     });
    // }

    //   if (page === "Sessions") {
    //     axios
    //       .get(`${process.env.CAPSTONE_FORMS_API_URL}`)
    //       .then(response => {
    //         // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
    //         state.Sessions.sessions = response.data;
    //         done();
    //         // router.navigate("/Forms");
    //       })
    //       .catch(error => {
    //         console.log("OH NU IT DIDN'T WORK", error);
    //       });
    //   }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
