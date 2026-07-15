// Ham 1
const createCalculator = function () {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b == 0) {
        return "Lỗi: chia cho 0";
      }
      return a / b;
    },
  };
};

const calculator = createCalculator();

console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(3, 5)); // 15
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.divide(10, 0)); //

// ham 2
function average(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let tong = 0;
  for (const x of numbers) {
    tong += x;
  }
  return tong / numbers.length;
}

console.log(average(10, 20, 30));
console.log(average(5));

// ham 3
function applyDiscount(price, discountPercent = 10) {
  if (!Number.isFinite(price)) {
    return "Giá không hợp lệ";
  }

  const finalPrice = price - (price * discountPercent) / 100;

  return Math.floor(finalPrice);
}

console.log(applyDiscount(100000));
console.log(applyDiscount("abc", 10));
console.log(applyDiscount(NaN, 10));

// Ham 4
function safeCalculate(operation, ...numbers) {
  let result;

  switch (operation) {
    case "add":
      result = 0;
      for (const number of numbers) {
        result += number;
      }
      break;

    case "subtract":
      result = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
      }
      break;

    case "multiply":
      result = 1;
      for (const number of numbers) {
        result *= number;
      }
      break;

    case "average":
      let total = 0;
      for (const number of numbers) {
        total += number;
      }
      result = total / numbers.length;
      break;

    default:
      return "Phép tính không được hỗ trợ";
  }

  if (Number.isNaN(result)) {
    return "Kết quả không hợp lệ";
  }

  return result;
}
