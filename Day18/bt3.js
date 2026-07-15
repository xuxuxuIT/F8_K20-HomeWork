const orders = [
  {
    id: 1,
    customer: "An",
    product: "Áo thun",
    category: "fashion",
    amount: 300000,
    status: "completed",
  },
  {
    id: 2,
    customer: "Bình",
    product: "iPhone 15",
    category: "electronics",
    amount: 25000000,
    status: "completed",
  },
  {
    id: 3,
    customer: "An",
    product: "Quần jean",
    category: "fashion",
    amount: 450000,
    status: "canceled",
  },
  {
    id: 4,
    customer: "Chi",
    product: "Tai nghe",
    category: "electronics",
    amount: 1200000,
    status: "completed",
  },
  {
    id: 5,
    customer: "Bình",
    product: "Giày",
    category: "fashion",
    amount: 900000,
    status: "pending",
  },
  {
    id: 6,
    customer: "An",
    product: "Sạc dự phòng",
    category: "electronics",
    amount: 350000,
    status: "completed",
  },
  {
    id: 7,
    customer: "Duy",
    product: "Áo khoác",
    category: "fashion",
    amount: 600000,
    status: "completed",
  },
];
// ham 1
function getRevenueByCategory(orders) {
  return orders.reduce((acc, order) => {
    if (order.status !== "completed") {
      return acc;
    }

    if (!acc[order.category]) {
      acc[order.category] = 0;
    }

    acc[order.category] += order.amount;

    return acc;
  }, {});
}
console.log(getRevenueByCategory(orders));

// ham 2
function getSpendingByCustomer(orders) {
  return orders.reduce((acc, order) => {
    if (order.status !== "completed") {
      return acc;
    }

    if (!acc[order.customer]) {
      acc[order.customer] = 0;
    }

    acc[order.customer] += order.amount;

    return acc;
  }, {});
}

console.log(getSpendingByCustomer(orders));

// ham 3
function getOrderCountByStatus(orders) {
  return orders.reduce((acc, order) => {
    if (!acc[order.status]) {
      acc[order.status] = 0;
    }

    acc[order.status]++;

    return acc;
  }, {});
}

console.log(getOrderCountByStatus(orders));

// ham 4
function getTopCustomer(orders) {
  const result = orders.reduce(
    (acc, order) => {
      if (order.status !== "completed") {
        return acc;
      }

      if (!acc.spending[order.customer]) {
        acc.spending[order.customer] = 0;
      }

      acc.spending[order.customer] += order.amount;

      if (acc.spending[order.customer] > acc.topTotal) {
        acc.topTotal = acc.spending[order.customer];
        acc.topCustomer = order.customer;
      }

      return acc;
    },
    {
      spending: {},
      topCustomer: null,
      topTotal: 0,
    },
  );

  return {
    customer: result.topCustomer,
    total: result.topTotal,
  };
}

console.log(getTopCustomer(orders));

// ham 5
function getFullReport(orders) {
  return orders.reduce(
    (acc, order) => {
      if (!acc.statusCount[order.status]) {
        acc.statusCount[order.status] = 0;
      }
      acc.statusCount[order.status]++;

      if (order.status === "completed") {
        acc.totalRevenue += order.amount;

        if (!acc.revenueByCategory[order.category]) {
          acc.revenueByCategory[order.category] = 0;
        }
        acc.revenueByCategory[order.category] += order.amount;

        if (!acc.spendingByCustomer[order.customer]) {
          acc.spendingByCustomer[order.customer] = 0;
        }
        acc.spendingByCustomer[order.customer] += order.amount;
      }

      return acc;
    },
    {
      revenueByCategory: {},
      spendingByCustomer: {},
      statusCount: {},
      totalRevenue: 0,
    },
  );
}

console.log(getFullReport(orders));
