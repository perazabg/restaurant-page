const createAboutPage = () => {
  const content = document.getElementById("content");

  //creates pageContent div
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  //creates page title
  const headLine = document.createElement("h1");
  headLine.classList.add("headLine");
  headLine.textContent = "About Us";
  pageContent.appendChild(headLine);

  //creates about us paragraph
  const aboutUs = document.createElement("p");
  aboutUs.classList.add("aboutUs");
  aboutUs.textContent =
    "My great grandfather, Luigi, first opened this pizzeria in 1968. He came by himself from Sicali, Italy, where he brought his dream of opening a pizzeria. His father, and his grandfather, ran a restaurant called 'Ristorante italiano Dio Romano'. Their restaurant offered a wide variety of food. But my great grandfather had a love for Pizza, so he set out to make the worlds finest Pizza. Pizza fit for a God!";
  pageContent.appendChild(aboutUs);

  //appends pageContent to HTML content div
  content.appendChild(pageContent);
};

export default createAboutPage;
