const createContactPage = () => {
  const content = document.getElementById("content");

  //creates pageContent div
  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  //creates page title
  const headLine = document.createElement("h1");
  headLine.classList.add("headLine");
  headLine.textContent = "Contact Us";
  pageContent.appendChild(headLine);

  //creates phone number
  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("phoneNumber");
  phoneNumber.textContent = "Phone: 123-456-7890";
  pageContent.appendChild(phoneNumber);

  //creates email address
  const emailAddress = document.createElement("p");
  emailAddress.classList.add("emailAddress");
  emailAddress.textContent = "Email: pizzeriaGiovanni@gmail.com";
  pageContent.appendChild(emailAddress);

  //creates address
  const address = document.createElement("p");
  address.classList.add("address");
  address.textContent = "Address: 123 Main Street, Rome, Italy";
  pageContent.appendChild(address);

  //appends pageContent to HTML content div
  content.appendChild(pageContent);
};

export default createContactPage;
