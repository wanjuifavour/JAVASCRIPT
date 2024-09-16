// Used to apply a function to all elements in an array and reduce the array to a single value
// It is used to reduce an array to a single value.
// Unlike map and forEach, it returns a single value.
//syntax: array.reduce( (prev, next) => { return prev + next; });

const marks = [10, 20, 30, 40, 50, 60];
const reduceMarks = marks.reduce((prev, next) => {
    return prev + next;
});
console.log(reduceMarks); // 210

// A single value is returned after reducing the array. The value is the sum of all the elements in the array.


// Using the map-reduce pattern to sum the prices of the food
// Steps:
// Access the food prices using dot notation on every food object.
// Get the food prices using the map method.
// Sum the food prices using the reduce method.
const initialFoodPrices = [
    { image: "🍕", name: "pizza", price: 100 },
    { image: "🍔", name: "burger", price: 50 },
    { image: "🍟", name: "fries", price: 30 },
]
// Extract the food prices using the map method
const totalPriceArray = initialFoodPrices.map((food) => {
    return food.price;
});

// Calculate the total price of the food using the reduce method
const totalPrice = totalPriceArray.reduce((prev, next) => {
    return prev + next;
});
console.log(totalPrice, 'is the total price of the food'); // 180 is the total price of the food

// combining it all into one code
const totalPrice2 = initialFoodPrices.map((food) => {
    return food.price;
}).reduce((prev, next) => {
    return prev + next;
});
console.log(totalPrice2, 'is the total price of the food'); // 180 is the total price of the food