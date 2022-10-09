const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
  
    title: "Outfit",
  },
  {
  
    title: "LOOK1",
  },
  {

    title: "LOOK2",
  },
  {
   
    title: "LOOK3",
  },
  {
  
    title: "LOOK4",
  },
  
];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
   
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];
    currentProductTitle.textContent = choosenProduct.title;
    
    
  });
});