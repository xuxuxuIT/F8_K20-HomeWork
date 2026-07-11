// Ham 1
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
console.log(createSlug("MacBook Pro 2024"));
console.log(createSlug("Bàn Phím Cơ RGB"));
console.log(createSlug("iPhone 15 Pro Max!!!"));

// Ham 2
function generateOrderId(productName, quantity) {
  const code = productName.slice(0, 3).toUpperCase();

  const length = productName.length;

  return `ORD-${code}-${quantity}-${length}`;
}

console.log(generateOrderId("MacBook Pro", 2));
console.log(generateOrderId("iPhone 15", 5));
console.log(generateOrderId("Bàn phím cơ", 1));

//Ham 3
function formatPrice(price, currency = "VND") {
  return new Intl.NumberFormat(currency === "USD" ? "en-US" : "vi-VN", {
    style: "currency",
    currency: currency,
  }).format(price);
}

console.log(formatPrice(2000000, "VND"));
console.log(formatPrice(2000, "USD"));
console.log(formatPrice(500000));

//Ham 4
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function buildProductUrl(baseUrl, product) {
  const slug = createSlug(product.name);

  return `${baseUrl}/${product.category}/${slug}?id=${product.id}`;
}

console.log(
  buildProductUrl("https://shop.vn", {
    name: "MacBook Pro 2024",
    id: 101,
    category: "laptop",
  }),
);
console.log(
  buildProductUrl("https://shop.vn", {
    name: "iPhone 15",
    id: 55,
    category: "phone",
  }),
);
