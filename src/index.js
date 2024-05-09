import "./style.css";
import generateLandingPage from "./landingPage.js";
import generateMenuPage from "./menuPage.js";
import generateAboutPage from "./aboutPage.js";
import sushi from "../assets/images/sushi.png";

const logoImg = document.querySelector("#logo_img");
logoImg.src = sushi;

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
tabListener();

function tabListener() {
  const menuPageListener = document.querySelectorAll(".menu");
  menuPageListener.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("IT WORKS");
      clearContent();
      generateMenuPage();
      tabListener();
    });
  });

  const homePageListener = document.querySelectorAll(".home");
  homePageListener.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("IT WORKS");
      clearContent();
      generateLandingPage();
      tabListener();
    });
  });
  const aboutPageListener = document.querySelectorAll(".about");
  aboutPageListener.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("IT WORKS");
      clearContent();
      generateAboutPage();
      tabListener();
    });
  });
}
