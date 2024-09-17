const availableFoods = [
    { id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234 },
    { id: "qwe2356dxh", name: "pizza", image: "🍕🍕", price: 400 },
    { id: "qwe2456yh", name: "meat", image: "🍖🍖", price: 500 },
    { id: "qwe2785yh", name: "chicken", image: "🍗🍗", price: 1200 },
];

const expensiveItems = availableFoods
    .filter(food => food.price > 450)
    .reduce((total, food) => total + food.price, 0);

console.log(`my total bill for items above 450 is ${expensiveItems}`);