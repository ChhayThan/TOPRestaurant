function generateAboutPage() {
  const content = document.querySelector("#content");

  const landingMessage = document.createElement("div");
  landingMessage.classList.add("message");
  const h1message = document.createElement("h1");
  h1message.innerText = "WHO ARE WE?";
  const h3message = document.createElement("h3");
  h3message.innerHTML = "THIS IS <span>寿司屋</span>!";

  landingMessage.appendChild(h1message);
  landingMessage.appendChild(h3message);

  content.appendChild(landingMessage);
}

export default generateAboutPage;
