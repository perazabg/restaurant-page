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

  //add paragraph
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Come join us for a delicious pizza experience! Our pizza are made with the freshest ingredients and are baked in our authentic brick oven.";
  pageContent.appendChild(paragraph);

  //appends pageContent to HTML content div
  content.appendChild(pageContent);
};

export default createHomePage;
