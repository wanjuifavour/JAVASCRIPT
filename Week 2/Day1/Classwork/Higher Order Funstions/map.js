// Map creates a new array with the results of calling a provided function on every element in the calling array.
// It is immutable.(does not change the original array)
// It returns a new array.
// It is used to transform the elements in the array.
// It is used to perform an action on each element in the array and return a new array.
// It is used to modify the elements in the array.
// Requires a return statement. Ommision of the return statement will return undefined.
// syntax: array.map( (element, index, array) => { return modifiedElement; });

const stdNames = ['Kipchumba', 'Kiptooo', 'Kiprotich', 'Kipkoech', 'Kipkorir'];
stdNames.map((name) => {
    console.log(`${name} did well`);
}); // Kipchumba did well Kiptooo did well Kiprotich did well Kipkoech did well Kipkorir did well
console.log(stdNames);

stdJina = ['Kipchumba', 'Kiptooo', 'Kiprotich', 'Kipkoech', 'Kipkorir'];
const stdNames1 = stdJina.map((name) => {
    return `${name} did very well`;
}); // Kipchumba did very well Kiptooo did very well Kiprotich did very well Kipkoech did very well Kipkorir did very well
console.log(stdNames1);

let runners = ['Kipchumba', 'Kiptooo', 'Kiprotich', 'Kipkoech', 'Kipkorir'];
let newRunners = runners.map((runner) => {
    return `${runner} runs 100 meters`;
}); // Kipchumba runs 100 meters Kiptooo runs 100 meters Kiprotich runs 100 meters Kipkoech runs 100 meters Kipkorir runs 100 meters
console.log(runners);
console.log(newRunners);

const initialFoodPrices = [
    { image: "🍕", name: "pizza", price: 100 },
    { image: "🍔", name: "burger", price: 50 },
    { image: "🍟", name: "fries", price: 30 },
]
initialFoodPrices.map((food) => {
    console.log(food.price * 2);
}); // 200 100 60

// lets sum the prices of the food
let FoodPrices = initialFoodPrices.map((food) => {
    // console.log(food.price);
    // to get the food prices - use dot notation on every food object
    return food.price;
});
console.log(FoodPrices); // [100, 50, 30]
let total = 0;
FoodPrices.forEach((price) => {
    return total += price;
});
console.log(total); // 180
console.log(`${total} is the total price of foods`); // $180