/* eslint-disable no-undef */
const content = document.getElementById("content");
const tabContainer = document.createElement("div");
content.appendChild(tabContainer);
tabContainer.setAttribute("id", "tab-container");
// about tab set up
const aboutTab = document.createElement("div");
aboutTab.setAttribute("id", "aboutTab");
aboutTab.appendChild(document.createTextNode("About"));
aboutTab.setAttribute("class", "tab");
aboutTab.addEventListener("click", () => {
  clickTab(aboutTab);
});
// contact tab set up
const contactTab = document.createElement("div");
contactTab.setAttribute("id", "contactTab");
contactTab.setAttribute("class", "tab");
contactTab.appendChild(document.createTextNode("Contact"));
contactTab.addEventListener("click", () => {
  clickTab(contactTab);
});
// menu tab set up
const menuTab = document.createElement("div");
menuTab.setAttribute("id", "menuTab");
menuTab.appendChild(document.createTextNode("Menu"));
menuTab.setAttribute("class", "tab");
menuTab.addEventListener("click", () => {
  clickTab(menuTab);
});
tabContainer.appendChild(aboutTab);
tabContainer.appendChild(contactTab);
tabContainer.appendChild(menuTab);

const clickTab = tabNode => {
  switch (tabNode) {
    case aboutTab:
      break;
    case contactTab:
      break;
    case menuTab:
      break;

    default:
      break;
  }
};
