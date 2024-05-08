import sushi_board_img from "../assets/images/sushi_board.png";
import chef_img from "../assets/images/Chef.png";

function generateLandingPage() {
  const content = document.querySelector("#content");

  const landingMessage = document.createElement("div");
  landingMessage.classList.add("message");
  const h1message = document.createElement("h1");
  h1message.innerText = "WELCOME TO 寿司屋";
  const h3message = document.createElement("h3");
  h3message.innerHTML = "YOUR GO TO <span>SUSHI SPOT</span>!";

  landingMessage.appendChild(h1message);
  landingMessage.appendChild(h3message);

  content.appendChild(landingMessage);

  const info1 = generateInfo(
    sushi_board_img,
    "SERVED WITH FRESH & HIGH-QUALITY INGREDIENTS",
    "Indulge in the exquisite flavors of our sushi selection, meticulously prepared with the freshest and highest quality ingredients harvested from all around the world. Each dish is crafted with precision and care to ensure an unparalleled dining experience that delights the senses."
  );

  const orderBtn = document.createElement("button");
  orderBtn.innerText = "ORDER NOW!";
  orderBtn.classList.add("menu", "btn");
  const info2 = generateInfo(
    chef_img,
    "PREPARE BY HIGHLY-SKILLED SUSHI MASTERS",
    "All of our menu items are prepared and served by our team of highly-skilled sushi masters. Each master has completed various intense special training to learn the distinctive techniques specific to preparing and serving this cuisine and are equipped with years of experience in the food industry. ",
    orderBtn
  );

  content.appendChild(info1);
  content.appendChild(info2);
}

function generateInfo(image, title, description, button) {
  const info = document.createElement("div");
  info.classList.add("info");
  const sub_info = document.createElement("div");
  sub_info.classList.add("sub-info");
  const sushi_board = new Image();
  sushi_board.src = image;
  const text_info = document.createElement("div");
  text_info.classList.add("text-info");
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const p = document.createElement("p");
  p.innerText = description;

  text_info.appendChild(h2);
  text_info.appendChild(p);
  if (button != null) {
    text_info.appendChild(button);
  }
  sub_info.appendChild(sushi_board);
  sub_info.appendChild(text_info);

  info.appendChild(sub_info);

  return info;
}

export default generateLandingPage;
