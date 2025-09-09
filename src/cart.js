let basket = JSON.parse(localStorage.getItem("data")) || [];
console.log(basket);
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");

  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();
