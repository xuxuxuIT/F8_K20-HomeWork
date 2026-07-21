function getCustomerStatistics(customers, products, orders) {
  const result = customers.map(function (customer) {
    const customerOrders = orders.filter(function (order) {
      return order.customerId === customer.id;
    });

    const productStats = {};

    customerOrders.forEach(function (order) {
      order.items.forEach(function (item) {
        const product = products.find(function (product) {
          return product.id === item.productId;
        });

        if (!product) return;

        if (!productStats[item.productId]) {
          productStats[item.productId] = {
            name: product.name,
            quantity: 0,
            totalSpent: 0,
          };
        }

        productStats[item.productId].quantity += item.quantity;

        productStats[item.productId].totalSpent +=
          product.price * item.quantity;
      });
    });

    const productList = Object.values(productStats);

    productList.sort(function (a, b) {
      return b.totalSpent - a.totalSpent;
    });

    let totalSpent = 0;

    productList.forEach(function (product) {
      totalSpent += product.totalSpent;
    });

    return {
      id: customer.id,
      name: customer.name,
      totalSpent,
      products: productList,
    };
  });

  result.sort(function (a, b) {
    return b.totalSpent - a.totalSpent;
  });

  return result;
}

const customers = [
  {
    id: 1,
    name: "John",
  },
];

const products = [
  {
    id: 101,
    name: "Laptop",
    price: 1200,
  },
];

const orders = [
  {
    id: 1,
    customerId: 1,
    items: [
      { productId: 101, quantity: 2 },
      { productId: 101, quantity: 3 },
    ],
  },
];

console.log(getCustomerStatistics(customers, products, orders));
