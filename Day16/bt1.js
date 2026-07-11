const products = [
  { id: 1, name: "MacBook Pro", price: 2000, category: "Laptop" },
  { id: 2, name: "iPhone 15", price: 1000, category: "Phone" },
  { id: 3, name: "Bàn phím cơ", price: 150, category: "Accessories" },
  { id: 4, name: "Màn hình Dell", price: 500, category: "Monitor" },
];

const orders = [
  { orderId: "ORD01", productId: 2, quantity: 2, status: "completed" },
  { orderId: "ORD02", productId: 1, quantity: 1, status: "pending" },
  { orderId: "ORD03", productId: 4, quantity: 3, status: "completed" },
  { orderId: "ORD04", productId: 3, quantity: 1, status: "canceled" },
  { orderId: "ORD05", productId: 2, quantity: 1, status: "completed" },
];

const completeOrderDetails = [];
for (let i = 0; i < orders.length; i++) {
  if (orders[i].status === "completed") {
    for (let j = 0; j < products.length; j++) {
      if (products[j].id === orders[i].productId) {
        completeOrderDetails.push({
          idDonhang: orders[i].orderId,
          tenSanpham: products[j].name,
          tongTien: products[j].price * orders[i].quantity,
        });
        break;
      }
    }
  }
}

console.log(completeOrderDetails);
