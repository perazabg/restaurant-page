const createHomePage = () => {
  const content = document.getElementById("content");

  //creates pageContent div
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  //appends headLine to pageContent
  const headLine = document.createElement("h1");
  headLine.textContent = "Welcome to Giovanni's Pizzeria";
  headLine.classList.add("headLine");
  pageContent.appendChild(headLine);

  //appends paragraph to pageContent
  const slogan = document.createElement("p");
  slogan.textContent = "Feast Like a Roman God With Our Hand-Crafted Pizzas!";
  slogan.classList.add("slogan");
  pageContent.appendChild(slogan);

  //appends pageContent to HTML content div
  content.appendChild(pageContent);
};

export default createHomePage;
