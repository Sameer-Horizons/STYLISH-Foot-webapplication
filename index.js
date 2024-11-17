const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/air.png",
      },
      {
        code: "darkblue",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f91f3378-554c-4296-bf33-af78f3bf4a69/air-force-1-low-by-you-custom-shoes-GZkDLp.png",
      }, 
      {
        code: "red",
        img: "https://media.finishline.com/i/finishline/CW6999_600_P5?$default$&w=670&h=670&bg=rgb(237,237,237)"

      },
      {
        code: "yellow",
        img: "https://images.vegnonveg.com/resized/700X573/9410/air-force-1-low-retro-qs-white-yellow-6458ec8b013eb.jpg"

      }
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://crepdogcrew.com/cdn/shop/products/grey3.png?v=1672482016&width=1500",
      },
      {
        code: "green",
        img: "https://cdn-images.farfetch-contents.com/15/22/35/87/15223587_26492951_600.jpg",
      },
      {
        code: "red",
        img: "https://crepdogcrew.com/cdn/shop/files/1_ed9a63f5-8de9-411a-a919-dff367b5be45.png?v=1712043487&width=2048",
      },
      {
        code: "yellow",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6674bfd2-b65d-4111-847c-1e384a3e63e1/air-jordan-1-zoom-cmft-2-womens-shoes-FVQrmK.png",
      }

    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "../assets/Images/sneaker-images/blazer.png",
      },
      {
        code: "green",
        img: "../assets/Images/sneaker-images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "../assets/Images/sneaker-images/crater.png",
      },
      {
        code: "lightgray",
        img: "../assets/Images/sneaker-images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "../assets/Images/sneaker-images/hippie.png",
      },
      {
        code: "black",
        img: "../assets/Images/sneaker-images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100* index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
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

