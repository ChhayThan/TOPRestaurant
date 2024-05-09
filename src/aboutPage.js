import house from "../assets/images/house.png";
import sushi_cat from "../assets/images/sushi_cat.png";

function generateAboutPage() {
  const content = document.querySelector("#content");

  const landingMessage = document.createElement("div");
  landingMessage.classList.add("message");
  landingMessage.classList.add("about_banner");

  const aboutHeading = document.createElement("div");
  aboutHeading.classList.add("aboutHeading");
  const h1message = document.createElement("h1");
  h1message.innerText = "WHO ARE WE?";
  const h3message = document.createElement("h3");
  h3message.innerHTML = "THIS IS <span>寿司屋</span>!";

  aboutHeading.appendChild(h1message);
  aboutHeading.appendChild(h3message);

  landingMessage.appendChild(aboutHeading);

  const aboutDescription = document.createElement("p");
  aboutDescription.innerHTML =
    "Welcome to 寿司屋, your authentic Japanese dining destination in the heart of Ottawa. <br> At 寿司屋, we are passionate about bringing the true taste of Japan to our guests. With our traditional recipes, fresh ingredients, and skilled chefs, we offer an unforgettable dining experience that celebrates the rich culinary heritage of Japan.";

  const housePicture = new Image();
  housePicture.src = house;
  landingMessage.appendChild(aboutDescription);
  landingMessage.appendChild(housePicture);

  const contactUs = document.createElement("div");
  contactUs.classList.add("contactus");
  h1message.innerText = "Get in Contact With Us!";
  contactUs.appendChild(h1message);
  const catPicture = new Image(300);
  catPicture.src = sushi_cat;
  contactUs.appendChild(catPicture);
  landingMessage.appendChild(contactUs);

  const locationInfo = document.createElement("div");
  locationInfo.classList.add("locationInfo");
  const h2Visit = document.createElement("h2");
  h2Visit.innerText = "Visit Us!";
  locationInfo.appendChild(h2Visit);
  const h3address = document.createElement("h3");
  h3address.innerText = "Address: 123 Main Street, Sushi City, Sashimi, SUSHI";
  locationInfo.appendChild(h3address);
  landingMessage.appendChild(locationInfo);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contactInfo");
  const h2Reach = document.createElement("h2");
  h2Reach.innerText = "Reach Us:";
  contactInfo.appendChild(h2Reach);
  const h3email = document.createElement("h3");
  h3email.innerText = "Email: thesushispot@sushi.ca";
  contactInfo.appendChild(h3email);
  const h3number = document.createElement("h3");
  h3number.innerHTML = "Phone Number: <br> +1(123) 456-7890";
  contactInfo.appendChild(h3number);
  landingMessage.appendChild(contactInfo);

  content.appendChild(landingMessage);
}

export default generateAboutPage;
