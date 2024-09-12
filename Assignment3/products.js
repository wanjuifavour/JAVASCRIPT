const fs = require('fs');


// an object of objects 
const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        description: "A high-precision wireless mouse with adjustable DPI settings.",
        price: 29.99,
        category: "Electronics",
        stock: 150
    },
    {
        id: 2,
        name: "Bluetooth Headphones",
        description: "Over-ear Bluetooth headphones with noise cancellation.",
        price: 89.99,
        category: "Electronics",
        stock: 75
    },
    {
        id: 3,
        name: "Ergonomic Office Chair",
        description: "An ergonomic office chair with adjustable height and lumbar support.",
        price: 199.99,
        category: "Furniture",
        stock: 20
    },
    {
        id: 4,
        name: "Yoga Mat",
        description: "A non-slip yoga mat with extra cushioning for comfort.",
        price: 24.99,
        category: "Fitness",
        stock: 100
    },
    {
        id: 5,
        name: "Stainless Steel Water Bottle",
        description: "A durable stainless steel water bottle with a leak-proof cap.",
        price: 15.99,
        category: "Home & Kitchen",
        stock: 200
    }
];
const data = {
    products: products
};
let productJSON = JSON.stringify(data);
console.log(productJSON);
fs.writeFile('db.json', productJSON, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('Successfully wrote to db.json');
    }
});