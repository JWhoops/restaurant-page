import { pizzaTab } from "./pizza";
import { spaTab } from "./spagtti";
import { fruitTab } from "./fruit";
/* eslint-disable no-undef */
const content = document.getElementById("content");
const tabContainer = document.createElement("div");
const body = document.querySelector("body");
content.appendChild(tabContainer);
tabContainer.setAttribute("id", "tab-container");

const clickTab = (tabNode, url) => {
  body.style.background = url;
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  switch (tabNode) {
    case fruitTab:
      fruitTab.classList.add("selectState");
      pizzaTab.classList.remove("selectState");
      spaTab.classList.remove("selectState");
      break;
    case pizzaTab:
      fruitTab.classList.remove("selectState");
      pizzaTab.classList.add("selectState");
      spaTab.classList.remove("selectState");
      break;
    case spaTab:
      fruitTab.classList.remove("selectState");
      pizzaTab.classList.remove("selectState");
      spaTab.classList.add("selectState");
      break;
    default:
      break;
  }
};

// about tab set up
fruitTab.addEventListener("click", () => {
  clickTab(fruitTab, "url('../imgs/fruit.jpg')");
});

pizzaTab.addEventListener("click", () => {
  clickTab(pizzaTab, "url('../imgs/pizza.jpg')");
});
// menu tab set up

spaTab.addEventListener("click", () => {
  clickTab(spaTab, "url('../imgs/spaghetti.jpeg')");
});

tabContainer.appendChild(spaTab);
tabContainer.appendChild(fruitTab);
tabContainer.appendChild(pizzaTab);

// default click
clickTab(
  spaTab,
  "url('https://img.taste.com.au/hyE5dSN3/taste/2016/11/spaghetti-with-meatballs-and-spicy-tomato-sauce-102298-1.jpeg')"
);
