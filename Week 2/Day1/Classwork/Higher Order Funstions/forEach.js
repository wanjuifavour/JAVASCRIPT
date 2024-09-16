// syntax: array.forEach( (element) => { // code to be executed for each element in the array });
[1, 2, 3, 4, 5].forEach((eachElementFromTheArray) => {
    console.log(eachElementFromTheArray); // It iterates over each element in the array and logs the element to the console.
}); // 1 2 3 4 5
// The forEach function is a higher-order function because it takes a callback function as an argument and calls the callback function on each element in the array.
// A callback function is a function that is passed as an argument to another function and is called by that function.
// It does not return anything, it just performs an action on each element in the array.
// The forEach function is used to iterate over each element in the array and perform an action on each element.
// It modifies the array in place.
[1, 2, 3, 4, 5].forEach((eachElementFromTheArray) => {
    console.log(eachElementFromTheArray * 2);
}); // 2 4 6 8 10

let runners = ['Kipchumba', 'Kiptooo', '', 'Kiprotich', 'Kipkoech'];
runners.forEach((eachElementFromTheArray) => {
    console.log(`${runners} runs 100 meters`);
}); // Kipchumba runs 100 meters Kiptooo runs 100 meters  runs 100 meters Kiprotich runs 100 meters Kipkoech runs 100 meters

let marks = [10, 20, 30, 40, 50];
let total = 0;
marks.forEach((mark) => {
    total += mark;
    console.log(`Your average mark is: ${total / marks.length}`);
}); // Your average mark is: 10 Your average mark is: 15 Your average mark is: 20 Your average mark is: 25 Your average mark is: 30