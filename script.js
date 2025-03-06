const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "RUNNING SHOES",
    price: 119,
    colors: [
      {
        code: "black",
        img: "running.jpg",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Casual Shoes",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "casual.jpg",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Retro Kicks",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "retro.jpg",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Sports",
    price: 129,
    colors: [
      {
        code: "black",
        img: "sports.jpg",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "High Tops",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "high.tops",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${index * -100}vw)`;

    // Change the chosen product
    chosenProduct = products[index];

    // Change texts of currentProduct
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = `$${chosenProduct.price}`;
    currentProductImg.src = chosenProduct.colors[0].img;

    // Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
function toggleAccountForm() {
  let accountForm = document.getElementById("accountForms");
  if (accountForm.style.display === "block") {
      accountForm.style.display = "none";
  } else {
      accountForm.style.display = "block";
      showLogin(); // Default to login form when opened
  }
}

function closeAccountForm() {
  document.getElementById("accountForms").style.display = "none";
}

function showLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
}

function showRegister() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}