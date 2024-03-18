const createHomePage = () => {
  const content = document.getElementById("content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  //appends headLine to pageContent
  const headLine = document.createElement("h1");
  headLine.textContent = "Welcome to Giovanni's Pizzeria";
  headLine.classList.add("headLine");
  pageContent.appendChild(headLine);

  //appends pageContent to HTML content div
  content.appendChild(pageContent);
};

export default createHomePage;
