const person = { name: '"Pham Nhu Linh', age: 20 };
for (const key in person) {
  console.log(key, person[key]);
}

const person2 = { name: "Nguyen Thu Hoai", age: 20, address: "Ha Noi" };
for (const key in person2) {
  console.log(key, person2[key]);
}
