// Viết hàm classifyTriangle(a, b, c) nhận vào ba số là độ dài ba cạnh, trả về một chuỗi mô tả loại hình tạo thành.

// Yêu cầu xử lý các trường hợp sau theo đúng thứ tự ưu tiên:

// Nếu một trong ba cạnh có giá trị nhỏ hơn hoặc bằng 0, trả về "Cạnh không hợp lệ".

// Nếu ba cạnh không thỏa bất đẳng thức tam giác (tổng hai cạnh phải lớn hơn cạnh còn lại), trả về "Không tạo thành tam giác".

// Nếu ba cạnh bằng nhau, trả về "Tam giác đều".

// Nếu có đúng hai cạnh bằng nhau, trả về "Tam giác cân".

// Nếu tam giác có một góc vuông (kiểm tra bằng định lý Pythagoras), trả về "Tam giác vuông".

//Còn lại, trả về "Tam giác thường".
function classifyTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Cạnh không hợp lệ";
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    return "Không tạo thành tam giác";
  } else if ((a == b) == c) {
    return "Tam giác đều";
  } else if (a == b || b == c || a == c) {
    return "Tam giác cân";
  } else if (
    a * a + b * b == c * c ||
    a * a + c * c == b * b ||
    b * b + c * c == a * a
  ) {
    return "Tam giác vuông";
  } else {
    return "Tam giác thường";
  }
}

function findMax(...s) {
  let max = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] > max) {
      max = s[i];
    }
  }

  return max;
}

// bai 4
const product = {
  id: 1,
  name: "Laptop",
};

console.log("Sản phẩm: " + product);

console.log("Sản phẩm:", product);

// ex6
const dog = {
  name: "Milo",

  bark() {
    console.log(`Woof! I'm ${this.name}`);
  },
};

dog.bark();
