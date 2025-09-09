let shop = document.getElementById("shop");
let shopItemData = [
  {
    id: 1,
    name: "casual shirt",
    price: 343,
    desc: "jasdf klasjdfkl lafdksa",
    img: "./images/img-1.jpg",
  },
  {
    id: 2,
    name: "casual",
    price: 43,
    desc: "jasdf klasjdfkl lafdksa",
    img: "./images/img-2.jpg",
  },
  {
    id: 3,
    name: "casual shi0000rt",
    price: 33,
    desc: "jasdf klasjdfkl lafdksa",
    img: "./images/img-3.jpg",
  },
  {
    id: 4,
    name: "casual shirt",
    price: 34,
    desc: "jasdf klasjdfkl lafdksa",
    img: "../images/img-4.jpg",
  },
];
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((item) => {
      const { id, name, price, img, desc } = item;
      return `
    <div id=produ-id-${id} class="item">
      <img width="220" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>${price}</h2>
          <div class="buttons">
            <p onclick= "decrement(${id})" class="minus">-</p>
            <div id=${id} class="quantity">0</div>
            <p onclick= "increment(${id})" class="plus">+</p>
          </div>
        </div>
      </div>
    </div>
    `;
    })
    .join(""));
};
generateShop();

let increment = (id) => {
  let selectedItem = id;
  // console.log(selectedItem);
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
  update(selectedItem);
  calculation();
};
let decrement = (id) => {
  let selectedItem = id;
  // console.log(selectedItem);
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  calculation();
};
let update = (id) => {
  // console.log(id);
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");

  let cartCount = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  cartIcon.innerHTML = cartCount;
};
