const renderCart = (cart) => {
    if (!Array.isArray(cart) || cart.length === 0) {
        alert("Invalid input")
        return;
    }
    cart.forEach(item => {
        item.sumPrice = item.price * item.quantity;
    });

    let table = `<table border="1">
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>`;
    cart.forEach((item) => {
        table += `<tr style="color: ${item.hotSale ? 'red' : 'black'};">
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>${item.sumPrice}</td>
                </tr>`;
    });

    const sumAllPrice = cart.reduce((acc, cur) => acc + cur.sumPrice, 0);
    table += `<tfoot>
                <tr>
                    <td colspan="3">Tổng tiền</td>
                    <td>${sumAllPrice}</td>
                </tr>
              </tfoot>
            </table>`;
    
    return table;
}

const cart = [
    {
      id: 1,
      name: 'T-Shirt',
      price: 100000,
      quantity: 2,
      hotSale: false
    },
    {
      id: 2,
      name: 'Jean',
      price: 200000,
      quantity: 1,
      hotSale: false
    },
    {
      id: 3,
      name: 'Skirt',
      price: 150000,
      quantity: 3,
      hotSale: true
    },
    {
      id: 4,
      name: 'Shirt',
      price: 120000,
      quantity: 2,
      hotSale: false
    },
    {
      id: 5,
      name: 'Jacket',
      price: 250000,
      quantity: 1,
      hotSale: true
    }
  ];
;


const tableItem = renderCart(cart);
document.body.innerHTML = tableItem;
