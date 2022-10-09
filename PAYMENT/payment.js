const productButton = document.querySelector(".buton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const thank = document.querySelector(".thank");
const paybutton = document.querySelector(".payButton");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});


close.addEventListener("click", () => {
  
  payment.style.display = "none";
});
close.addEventListener("click", () => {
  thank.style.display="flex";
 
 

});