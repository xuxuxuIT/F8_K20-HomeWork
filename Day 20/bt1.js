// 1.
const baseObject = {
  introduce() {
    return `"Tôi là ${this.name}, ${this.age}"`;
  },
};

//2.
const ObjectLevel2 = Object.create(baseObject);
ObjectLevel2.getInfo = function () {
  return `"${this.name} làm ở phòng ${this.phongban}, lương ${this.luong}"`;
};
//3.
const items1 = Object.create(ObjectLevel2);
items1.name = "Nguyễn Văn A";
items1.age = 28;
items1.phongban = "IT";
items1.luong = 15000000;

const items2 = Object.create(ObjectLevel2);
items2.name = "Trần Thị B";
items2.age = 30;
items2.phongban = "Manager";
items2.luong = 20000000;

const items3 = Object.create(ObjectLevel2);
items3.name = "Trần Văn C";
items3.age = 35;
items3.phongban = "HR";
items3.luong = 18000000;

const items4 = Object.create(ObjectLevel2);
items4.name = "Nguyễn Thị D";
items4.age = 35;
items4.phongban = "IT";
items4.luong = 25000000;

const items5 = Object.create(ObjectLevel2);
items5.name = "Phạm Thị E";
items5.age = 27;
items5.phongban = "HR";
items5.luong = 16000000;

//4.
function checkProperty(obj, property) {
  return Object.hasOwn(obj, property);
}

//5.
console.log(Object.getPrototypeOf(items1) === ObjectLevel2);
console.log(Object.getPrototypeOf(ObjectLevel2) === baseObject);

const changeProto = {
  getInfo() {
    return `"${this.name} là nhân viên của ${this.phongban}"`;
  },
};

Object.setPrototypeOf(items1, changeProto);
Object.setPrototypeOf(items2, changeProto);
console.log(items1.getInfo());
console.log(items2.getInfo());

//6.
Object.setPrototypeOf(items1, changeProto);
console.log(Object.getOwnPropertyNames(items2));
console.log(Object.getOwnPropertyNames(items3));

//7.
console.log(Object.getOwnPropertyDescriptor(items1, "luong"));
console.log(Object.getOwnPropertyDescriptor(items2, "name"));

//8.
Object.seal(items3);
items3.diachi = "Hanoi";
console.log(items3.diachi);

items3.luong = 15000000;
console.log(items3.luong);
console.log(Object.isSealed(items3));

//9.
const items = [items1, items2, items3, items4, items5];

const group = Object.groupBy(items, (item) => item.phongban);

console.log(group);

//10.
const timKiem = Object.fromEntries([
  ["A001", "Nguyễn Văn A"],
  ["A002", "Trần Thị B"],
]);

console.log(timKiem);
console.log(timKiem["A002"]);
