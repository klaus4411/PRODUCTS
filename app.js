let productList = document.querySelector(".products_list");

const URL = "https://fakestoreapi.com";

function deleteItem(id) {
  let result = confirm(`Should the product be deleted? ${id}`);
  if (result == true) {
    fetch(URL + "/products" + "/" + id, {
      method: "DELETE",
    });
  } else {
    alert("action canceled");
  }
}
function renderProduct(products) {
  products.map((el) => {
    const item = document.createElement("li");
    item.className = "product_item";
    item.innerHTML = `
    <img class="product_img" src=${el.image} alt="" />
    <div class="item_info">
      <p class="item_text"><strong>Price</strong> :${el.price}</p>
      <p class="item_text"><strong>Discount</strong> :${el.rating.count}</p>
      <p class="item_text">
        <strong>Desc </strong> :${el.description}
      </p>
    </div>
    <button onclick="deleteItem(${el.id})" class="item_btn">
        <img src="./icons/delete.svg" alt="" />
    </button>`;
    productList.prepend(item);
  });
}

function getItem() {
  fetch(URL + "/" + "products")
    .then((el) => el.json())
    .then((item) => renderProduct(item));
}
getItem();
