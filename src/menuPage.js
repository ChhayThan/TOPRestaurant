import avocado_Uranmaki from "../assets/images/Avocado_Uramaki.png";
import salmon_Temaki from "../assets/images/Salmon_Temaki.png";
import sashimi_slices from "../assets/images/sashimi_slices.png";
import textured_Gyoza from "../assets/images/Textured_Gyoza.png";
import okonomiyaki from "../assets/images/Okonomiyaki.png";

function generateMenuPage() {
  const content = document.querySelector("#content");

  const landingMessage = document.createElement("div");
  landingMessage.classList.add("message");
  const h1message = document.createElement("h1");
  h1message.innerText = '"メニュー"';
  const h3message = document.createElement("h3");
  h3message.innerHTML = "TODAY'S <span>SPECIALIZED</span> MENU!";

  landingMessage.appendChild(h1message);
  landingMessage.appendChild(h3message);

  content.appendChild(landingMessage);

  const item1 = generateItem(
    avocado_Uranmaki,
    "Avocado Uramaki Sushi Wrapped with Salmon Plate",
    "14.45",
    true
  );
  const item2 = generateItem(
    salmon_Temaki,
    "Salmon Cucumber Temaki Sushi Plate",
    "12.95",
    true
  );

  const item3 = generateItem(
    sashimi_slices,
    "Salmon Sake & Tuna Otoro Sashimi Slice (6 pieces)",
    "8.95",
    true
  );

  const item4 = generateItem(textured_Gyoza, "Textured Gyoza", "12.95", true);

  const item5 = generateItem(
    okonomiyaki,
    "Tradtional Okonomiyaki",
    "16.95",
    true
  );

  content.appendChild(item1);
  content.appendChild(item2);
  content.appendChild(item3);
  content.appendChild(item4);
  content.appendChild(item5);
}

function generateItem(image, title, price, button) {
  const item = document.createElement("div");
  item.classList.add("info");
  const sub_info = document.createElement("div");
  sub_info.classList.add("sub-info");
  const picture = new Image();
  picture.src = image;
  const text_info = document.createElement("div");
  text_info.classList.add("text-info");
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const li = document.createElement("li");
  li.innerText = price;

  text_info.appendChild(h2);
  text_info.appendChild(li);
  if (button) {
    const orderBtn = document.createElement("button");
    orderBtn.innerText = "Add to order!";
    orderBtn.classList.add("order", "btn");
    text_info.appendChild(orderBtn);
  }
  sub_info.appendChild(picture);
  sub_info.appendChild(text_info);

  item.appendChild(sub_info);

  return item;
}

export default generateMenuPage;
