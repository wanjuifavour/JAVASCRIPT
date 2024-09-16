// Filter creates a new array with all elements that pass the test implemented by the provided function.
// It is used to filter elements in an array.
// It returns a new array.
// It is used to filter elements in the array based on a condition.
// It is used to select elements in the array that meet a certain condition.
// syntax: array.filter( (element, index, array) => { return condition; });

const initialFoodPrices = [
    {image: "🍕", name: "pizza", price: 100},
    {image: "🍔", name: "burger", price: 50},
    {image: "🍟", name: "fries", price: 30},
];

const filterFoodPrices = initialFoodPrices.filter( (food) => {
    return food.price > 50;
}); // [{image: "🍕", name: "pizza", price: 100}]