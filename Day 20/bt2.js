//1. Tạo một Object cấu hình
const cauHinh = {
  mucPhuPhi: 120000,
  currency: "VND",
  version: 1,
};

Object.freeze(cauHinh);
cauHinh.mucPhuPhi = 0.5;
console.log(cauHinh.mucPhuPhi);

function generateId() {
  return "ID_" + Math.random().toString(36).slice(2, 10);
}

//2.
class MyClass {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.giamGia = 0;

    Object.defineProperty(this, "id", {
      value: generateId(),
      writable: false,
      enumerable: false,
      configurable: false,
    });
  }

  addItem(name, price, soLuong) {
    this.items.push({ name, price, soLuong });
  }

  get Tong() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.soLuong;
    }

    total += cauHinh.mucPhuPhi;
    total -= (total * this.giamGia) / 100;
    return total;
  }

  set phanTramGiamGia(value) {
    if (value < 0 || value > 100) {
      throw new Error("Discount phải từ 0 đến 100");
    }
    this.giamGia = value;
  }
}
const instance = new MyClass("Danh sách của An");
instance.addItem("Bàn phím", 500000, 2);
instance.addItem("Chuột", 200000, 1);
console.log(instance.Tong);
instance.phanTramGiamGia = 10;
console.log(instance.total);

try {
  instance.discountPercent = 150;
} catch (e) {
  console.log(e.message);
}

console.log(Object.keys(instance));
// Output: mảng không có chữ "id" trong đó

instance.id = "hack123";
console.log(instance.id);

//4.
function logSummary() {
  console.log(`${this.name}: ${this.Tong}`);
}

setTimeout(logSummary.bind(instance), 100);

//5.
const objA = {
  name: "An",
  age: 20,
  city: "Hà Nội",
};

const objB = {
  age: 25,
  job: "Developer",
};

const merged = Object.assign({}, objA, objB);

console.log(merged);

console.log(objA);
