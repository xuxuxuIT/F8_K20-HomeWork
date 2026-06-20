function snt(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function tamGiac(n) {
  let gt;
  for (let i = 1; i <= n; i++) {
    let dong = "";
    for (let j = 1; j <= i; j++) {
      if (j % 3 == 0 && j % 5 == 0) {
        gt = "#";
      } else if (snt(j)) {
        gt = "*";
      } else {
        gt = j;
      }
      dong += gt + " ";
    }
    console.log(dong.trim());
    if (i % 2 == 0) {
      console.log("-".repeat(i));
    }
  }
}
tamGiac(5);
