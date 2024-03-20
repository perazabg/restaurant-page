const createMenuPage = () => {
  const content = document.getElementById("content");

  const pageContent = document.createElement("div");
  pageContent.classList.add("pageContent");

  //create dish container
  const dish1 = document.createElement("div");
  const dish2 = document.createElement("div");
  const dish3 = document.createElement("div");
  const dish4 = document.createElement("div");

  //give dishes IDs
  dish1.setAttribute("id", "dish1");
  dish2.setAttribute("id", "dish2");
  dish3.setAttribute("id", "dish3");
  dish4.setAttribute("id", "dish4");

  //set dish classes
  dish1.classList.add("dish");
  dish2.classList.add("dish");
  dish3.classList.add("dish");
  dish4.classList.add("dish");

  //add image to dish
  const img1 = document.createElement("img");
  img1.src = "./src/imgs/margPizza.jpg";
  img1.alt = "Margherita Pizza";

  const img2 = document.createElement("img");
  img2.src = "./imgs/dish2.jpg";
  img2.alt = "dish2";

  const img3 = document.createElement("img");
  img3.src = "./imgs/dish3.jpg";
  img3.alt = "dish3";

  const img4 = document.createElement("img");
  img4.src = "./imgs/dish4.jpg";
  img4.alt = "dish4";

  dish1.appendChild(img1);
  dish2.appendChild(img2);
  dish3.appendChild(img3);
  dish4.appendChild(img4);

  //set dish description
  const dishDesc1 = document.createElement("p");
  dishDesc1.textContent =
    "Pizza Margherita\n$10.99\nClassic Margherita Pizza topped with fresh basil leaves, olive oil, mozzarela, and oregano.";
  const dishDesc2 = document.createElement("p");
  dishDesc2.textContent =
    "Pizza Peperoni\n$12.99\nClassic Pepperoni Pizza topped with large pepperoni slices, fresh basil leaves, olive oil, mozzarela, and oregano.";
  const dishDesc3 = document.createElement("p");
  dishDesc3.textContent =
    "Pizza Vegetariana\n$12.99\nOur vegetarian option, topped with locally picked vegetables, olive oil, mozzarela, and oregano.";
  const dishDesc4 = document.createElement("p");
  dishDesc4.textContent =
    "Pizza Quattro Formaggi\n$10.99\nOur famous four cheese pizza topped with our special cheese blend, oregano, and olive oil.";

  //set dish description classes
  dishDesc1.classList.add("dishDesc");
  dishDesc2.classList.add("dishDesc");
  dishDesc3.classList.add("dishDesc");
  dishDesc4.classList.add("dishDesc");

  //append descriptions to dishes
  dish1.appendChild(dishDesc1);
  dish2.appendChild(dishDesc2);
  dish3.appendChild(dishDesc3);
  dish4.appendChild(dishDesc4);

  //append dishes to pageContent
  pageContent.appendChild(dish1);
  pageContent.appendChild(dish2);
  pageContent.appendChild(dish3);
  pageContent.appendChild(dish4);

  //appends pageContent to content div
  content.appendChild(pageContent);
};

export default createMenuPage;
