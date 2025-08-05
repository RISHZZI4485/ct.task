// 1. Product array
let products = [
  { id: 1, name: "Laptop", price: 1000, quality: 2 },
  { id: 2, name: "Phone", price: 500, quality: 0 },
  { id: 3, name: "Headphones", price: 150, quality: 3 },
  { id: 4, name: "Monitor", price: 300, quality: 1 }
];

// 2. Filter available products (quality > 0)
let availableProducts = products.filter(p => p.quality > 0);
console.log("Available Products:", availableProducts);

// 3. Reduce to calculate total cart value
let totalCartValue = availableProducts.reduce((total, product) => {
  return total + (product.price * product.quality);
}, 0);
console.log("Total Cart Value: $" + totalCartValue);

// 4. Remove the second product using slice()
let updatedProductList = [
  ...products.slice(0, 1),
  ...products.slice(2)
];
console.log("After Removing Second Product:", updatedProductList);

// 5. Clone and update the product list using spread operator
let newProduct = { id: 5, name: "Keyboard", price: 80, quality: 2 };
let newProductList = [...products, newProduct];
console.log("Cloned & Updated Product List:", newProductList);

// 6. Product object with a method
let productWithMethod = {
  id: 6,
  name: "Mouse",
  price: 40,
  quality: 1,
  printDetails() {
    console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quality}`);
  }
};
productWithMethod.printDetails();

// 7. Destructuring to extract product details
let { name, price, quality } = productWithMethod;
console.log(`Name: ${name}, Price: ${price}, Quantity: ${quality}`);
