const productData = [
    { product_id: 1, product_name: "Sản phẩm 1", product_price: 1000 },
    { product_id: 2, product_name: "Sản phẩm 2", product_price: 2000 },
    { product_id: 3, product_name: "Sản phẩm 3", product_price: 3000 },
    { product_id: 4, product_name: "Sản phẩm 4", product_price: 4000 },
  ];
  
  function renderProductList() {
    const productTable = document.querySelector("#product_table tbody");
    productTable.innerHTML = "";
  
    productData.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.product_name}</td>
        <td>${item.product_price}</td>
        <td>
          <input type="number" id="quantity_${item.product_id}" value="1" min="1" style="width: 50px; text-align: center;">
          <button type="button" class="add-to-cart" data-id="${item.product_id}">Thêm</button>
        </td>
      `;
      productTable.appendChild(row);
    });
  
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", addToCart);
    });
  }
  
  function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const quantityInput = document.querySelector(`#quantity_${productId}`);
    const quantity = parseInt(quantityInput.value) || 1;
  
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
    const existingItem = cart.find((item) => item.product_id === productId);
  
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product_id: productId, quantity });
    }
  
    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  function renderCart() {
    const cartContainer = document.querySelector("#cart_data");
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Giỏ hàng trống</p>";
      return;
    }
  
    let totalQuantity = 0;
    let totalPrice = 0;
  
    let cartTable = `
      <table cellpadding="0" cellspacing="0" width="100%" border="1">
        <thead>
          <tr>
            <th width="5%">STT</th>
            <th>Tên sản phẩm</th>
            <th width="20%">Giá</th>
            <th width="20%">Số lượng</th>
            <th width="20%">Thành tiền</th>
            <th width="5%">Xóa</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    cart.forEach((item, index) => {
      const product = productData.find((p) => p.product_id === item.product_id);
      if (!product) return; 
      
      const total = product.product_price * item.quantity;
      totalQuantity += item.quantity;
      totalPrice += total;
  
      cartTable += `
        <tr>
          <td>${index + 1}</td>
          <td>${product.product_name}</td>
          <td>${product.product_price}</td>
          <td><input type="number" class="cart-quantity" data-id="${item.product_id}" value="${item.quantity}" min="1" style="width: 50px;"></td>
          <td>${total}</td>
          <td><button class="delete-item" data-id="${item.product_id}">Xóa</button></td>
        </tr>
      `;
    });
  
    cartTable += `
        <tr>
          <td colspan="3"><strong>Tổng</strong></td>
          <td>${totalQuantity}</td>
          <td colspan="2">${totalPrice}</td>
        </tr>
        </tbody>
      </table>
      <button id="update_cart">Cập nhật giỏ hàng</button>
      <button id="delete_cart">Xóa giỏ hàng</button>
    `;
  
    cartContainer.innerHTML = cartTable;
  
    document.querySelectorAll(".cart-quantity").forEach((input) => {
      input.addEventListener("change", updateCartItem);
    });
  
    document.querySelectorAll(".delete-item").forEach((button) => {
      button.addEventListener("click", deleteCartItem);
    });
  
    document.querySelector("#update_cart").addEventListener("click", updateCart);
    document.querySelector("#delete_cart").addEventListener("click", deleteAllCart);
  }
  
  function updateCartItem(event) {
    const productId = parseInt(event.target.dataset.id);
    const quantity = parseInt(event.target.value) || 1;
  
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
    cart = cart.map((item) => (item.product_id === productId ? { ...item, quantity } : item));
  
    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  function deleteCartItem(event) {
    const productId = parseInt(event.target.dataset.id);
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
    cart = cart.filter((item) => item.product_id !== productId);
  
    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  function updateCart() {
    alert("Giỏ hàng đã được cập nhật!");
    renderCart();
  }
  
  function deleteAllCart() {
    if (confirm("Bạn có chắc chắn muốn xóa giỏ hàng?")) {
      sessionStorage.removeItem("cart");
      renderCart();
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderProductList();
    renderCart();
  });
  