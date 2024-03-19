import createHomePage from "./homePage";
import createMenuPage from "./menu";
import createContactPage from "./contact";
import createAboutPage from "./about";

const createTabs = () => {
  const nav = document.getElementById("nav");

  //create tabs
  const homeTab = document.createElement("div");
  const menuTab = document.createElement("div");
  const contactTab = document.createElement("div");
  const aboutTab = document.createElement("div");

  //set tab IDs
  homeTab.setAttribute("id", "homeTab");
  menuTab.setAttribute("id", "menuTab");
  contactTab.setAttribute("id", "contactTab");
  aboutTab.setAttribute("id", "aboutTab");

  //set tab text
  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact Us";
  aboutTab.textContent = "About";

  //set tab classes
  homeTab.classList.add("tab");
  menuTab.classList.add("tab");
  contactTab.classList.add("tab");
  aboutTab.classList.add("tab");

  //append tabs to content
  nav.appendChild(homeTab);
  nav.appendChild(menuTab);
  nav.appendChild(contactTab);
  nav.appendChild(aboutTab);

  //add event listeners
  homeTab.addEventListener("click", () => {
    clearContent();
    createHomePage();
  });
  menuTab.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });
  contactTab.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });
  aboutTab.addEventListener("click", () => {
    clearContent();
    createAboutPage();
  });
};

//clear content
function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

export default createTabs;
