const inputBtn = document.getElementById("input-btn");
const input = document.getElementById("input");
const formList = document.getElementById("form-list");
const pizzaContainer = document.getElementById("pizza-container");

const pizza = [
  {
    id: 1,
    nombre: "MUZZARELLA",
    precio: 500,
    ingredientes: ["Salsa de Tomate", "muzzarella", "oregano", "aceitunas"],
    img: "/img/pizza-mozzarella.jpg",
  },

  {
    id: 2,
    nombre: "ESPECIAL",
    precio: 750,
    ingredientes: [
      "Salsa de tomate",
      "muzzarella",
      "jamon cocido",
      "morrones",
      "oregano",
      "aceitunas",
    ],
    img: "/img/pizza-especial.jpg",
  },

  {
    id: 3,
    nombre: "FUGAZZA",
    precio: 700,
    ingredientes: [
      "Salsa de tomate",
      "muzzarella",
      "cebolla",
      "oregano",
      "aceituna",
    ],
    img: "/img/pizza-fugazza.jpg",
  },
  {
    id: 4,
    nombre: "NAPOLITANA",
    precio: 800,
    ingredientes: [
      "Salsa de tomate",
      "muzzarella",
      "tomate en rodajas",
      "oregano",
      "aceitunas",
    ],
    img: "/img/pizza-napolitana.jpg",
  },

  {
    id: 5,
    nombre: "ROQUEFORT",
    precio: 900,
    ingredientes: [
      "Salsa de tomate",
      "muzzarella",
      "roquefort",
      "oregano",
      "aceitunas",
    ],
    img: "/img/pizza-roquefort.jpg",
  },
];

const renderPizza = (pizza) => {
  if (!pizza) {
    pizzaContainer.innerHTML = `<div>
            <h2>No existe la pizza &#9888</h2>
            <h3>Agregar un número</h3>
        </div>
        `;
  } else {
    pizzaContainer.innerHTML = `<div>
            <h2>${pizza.nombre.toUpperCase()}</h2>
            <h3>Precio: $${pizza.precio}</h3>
            <h4>Ingredientes: ${pizza.ingredientes}</h4>
            <img src="${pizza.img}">
        </div>
        `;
  }
};

const searchPizza = (value) => pizza.find((pizza) => pizza.id === value);

const saveLocalStorage = (pizza) => {
  localStorage.setItem("pizza", JSON.stringify(pizza));
};

const sendForm = (e) => {
  e.preventDefault();
  const searchInput = input.value;
  const searchedInput = searchPizza(Number(searchInput));
  renderPizza(searchedInput);
  saveLocalStorage(searchedInput);
  if (!searchInput) {
    searchPizza("No existe la pizza buscada");
  }
  form.reset();
};

const init = () => {
  formList.addEventListener("submit", sendForm);
  const pizzaSaved = JSON.parse(localStorage.getItem("pizza"));
  if (pizzaSaved) {
    renderPizza(pizzaSaved);
  }
};

init();
