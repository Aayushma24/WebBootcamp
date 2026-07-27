const read=require("readline-sync");
const products = [
  { name: "Laptop", category: "Electronics", price: 85000 },
  { name: "Wireless Mouse", category: "Electronics", price: 1500 },
  { name: "Coffee Mug", category: "Kitchen", price: 350 },
  { name: "Running Shoes", category: "Footwear", price: 4500 },
  { name: "Backpack", category: "Accessories", price: 2500 },
  { name: "Notebook", category: "Stationery", price: 120 },
  { name: "Water Bottle", category: "Kitchen", price: 600 },
  { name: "Headphones", category: "Electronics", price: 3200 },
  { name: "T-Shirt", category: "Clothing", price: 900 },
  { name: "Smartphone", category: "Electronics", price: 42000 }
];
const productName = read.question("Enter the name of the product you are looking for: ");


function addProduct(productName) {
    console.log("New product added:", productName);
    const name=read.question("Enter the name of the product: ");
    const category=read.question("Enter the category of the product: ");
    const price=parseFloat(read.question("Enter the price of the product: "));
    const newProduct={
        name:name,
        category:category,
        price:price,
    };
    products.push(newProduct);
    console.log("Product added successfully!");
    console.log("Updated product list:", products);
}
function filterProduct_byPrice(productName) {
    const Price =read.question("Enter the price");
    const filterProduct_byPrice=products.filter((item)=>{
        return item.price.toLowerCase()==Price.toLowerCase();
    });
    console.log("filterProduct_byPrice");
    filterProducts.forEach(item => {
        console.log(item.name,item.category,item.price)
    });
    while(true){
        console.log("Methods menu");
        console.log("1.Add Product");
        console.log("2.Filter Product");
        console.log("3.Exit");
        const choice=read.question("Enter your choice;");
        //SWITCH IMPLEMENTATION GARNI
        //WHEN USER CLICK 3 EXIT
    }
    // filter products by price
}
function filterProduct_byCategory(productName) {
    const category =read.question("Enter the category");
    const filterProduct_byCategory=products.filter((item)=>{
        return item.category.toLowerCase()==category.toLowerCase();
    });
    console.log("filterProduct_byCategory");
    filterProducts.forEach(item => {
        console.log(item.name,item.category,item.price)
    });
    // filter products by category
}
    function removeProduct(productName) {
    const index = products.findIndex((item) => item.name.toLowerCase() === productName.toLowerCase());
    if (index !== -1) {
        products.splice(index, 1);
        console.log("Product removed successfully!");
    } else {
        console.log("Product not found.");
    }
    console.log("Updated product list:", products);
    // remove product from the products array
}
function displayProduct(productName) {
    const product = products.find((item) => item.name.toLowerCase() === productName.toLowerCase());
    if (product) {
        console.log("Product found:");
        console.log("Name:", product.name);
        console.log("Category:", product.category);
        console.log("Price:", product.price);
    } else {
        console.log("Product not found.");
    }
    // display product details
}

