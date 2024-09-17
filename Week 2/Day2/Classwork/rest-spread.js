// The rest parameter allows for an indefinite number of arguments to be passed to a function as an array. The rest parameter is denoted by three dots (...) followed by the parameter name. The rest parameter must be the last parameter in the function definition, and it collects all remaining arguments into an array.
// Syntax: function functionName(param1, param2, ...restParam) { // function body }
// Example:
function sum(...numbers) {  
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
// In this code snippet, we define a function sum that takes a rest parameter numbers to collect an indefinite number of arguments. The function uses the reduce method to sum all the numbers in the array and returns the total. When we call the sum function with different numbers of arguments, we get the sum of the numbers.
// The rest parameter can also be used to collect a subset of arguments into an array. You can use destructuring to extract specific values from the rest parameter array.
// Example:
function logInfo(name, ...info) {
    const [age, city] = info;
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
}
logInfo('Alice', 30, 'New York');
// In this code snippet, we define a function logInfo that takes a name parameter and a rest parameter info to collect an indefinite number of arguments. We use destructuring to extract the age and city values from the info array. When we call the logInfo function with a name, age, and city, we log the name, age, and city values to the console.


// Spread Operator

// The spread operator allows for an array to be expanded into individual elements. The spread operator is denoted by three dots (...) followed by the array name. The spread operator can be used in function calls, array literals, and more to expand an array into individual elements.
// Syntax: const newArray = [...array];