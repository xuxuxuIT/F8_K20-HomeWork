function Order(orderId, customerName, items, status = "pending") {
  this.orderId = orderId;
  this.customerName = customerName;
  this.items = items;
  this.status = status;

  this.getTotalAmount = function () {
    let total = 0;
    this.items.forEach(function (item) {
      total += item.price * item.quantity;
    });
    return total;
  };

  this.getItemCount = function () {
    let cnt = 0;
    this.items.forEach(function (item) {
      cnt += item.quantity;
    });
    return cnt;
  };

  this.updateStatus = function (newStatus) {
    this.status = newStatus;
    return `"Đơn hàng ${this.orderId} đã chuyển sang: ${newStatus}"`;
  };

  this.addItem = function (item) {
    this.items.push(item);
    return this.getTotalAmount();
  };

  this.getSummary = function () {
    return {
      orderId: this.orderId,
      customerName: this.customerName,
      totalAmount: this.getTotalAmount(),
      itemCount: this.getItemCount(),
      status: this.status,
    };
  };
}

const order1 = new Order("ORD01", "Nguyễn An", [
  { name: "Áo thun", price: 150000, quantity: 2 },
  { name: "Quần jean", price: 350000, quantity: 1 },
]);

const order2 = new Order("ORD02", "Trần Bình", [
  { name: "iPhone 15", price: 25000000, quantity: 1 },
]);

console.log(order1.getTotalAmount());
console.log(order1.getItemCount());
console.log(order1.getSummary());
console.log(order1.updateStatus("completed"));
console.log(order1.addItem({ name: "Mũ", price: 120000, quantity: 2 }));
console.log(order1 instanceof Order);
console.log(order2 instanceof Order);
