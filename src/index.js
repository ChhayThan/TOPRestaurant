import "./style.css";
import generateLandingPage from "./landingPage.js";
import generateMenuPage from "./menuPage.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

const content = document.querySelector("#content");

function clearContent() {
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
}

generateLandingPage();

const toMenuPage = document.querySelectorAll(".menu");
toMenuPage.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("IT WORKS");
    clearContent();
    generateMenuPage();
  });
});

const toHomePage = document.querySelectorAll(".home");
toHomePage.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("IT WORKS");
    clearContent();
    generateLandingPage();
  });
});
