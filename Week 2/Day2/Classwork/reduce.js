// This is a repeat session on reduce method
// The reduce method is the "swiss army knife" of array methods. It can be used to filter, map, and reduce an array. It is a very powerful method that can be used to solve a wide variety of problems.
// The reduce method takes a callback function as an argument. The callback function takes two arguments: an accumulator and the current value of the array. The accumulator is the value that is returned by the callback function and is passed to the next iteration of the array. The current value is the value of the array at the current index.
// The reduce method also takes an optional second argument, which is the initial value of the accumulator. If no initial value is provided, the first element of the array is used as the initial value.
// The reduce method is called on an array and returns a single value. The reduce method can be used to sum the elements of an array, find the maximum or minimum value, or perform any other operation that requires combining the elements of an array into a single value.
// syntax: array.reduce(callback, initialValue)
// The callback function takes four arguments: accumulator, currentValue, currentIndex, and array.  The initialValue is optional. example: array.reduce((accumulator, currentValue, currentIndex, array) => { return accumulator + currentValue; }, 0); 
// 0 is the initial value of the accumulator in this example. If no initial value is provided, the first element of the array is used as the initial value.
// The currentValue is the value of the array at the current index. The currentIndex is the index of the current value in the array. The array is the original array that the reduce method was called on.
// The currentIndex is the index of the current value in the array. The array is the original array that the reduce method was called on.
// The array is the original array that the reduce method was called on.

// The reduce method can be used to solve a wide variety of problems. Here are some examples of how the reduce method can be used to solve common problems:

// 1. Write a function that takes an array of numbers and returns the sum of the numbers using the reduce method.
function sumOfNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumOfNumbers([1, 2, 3, 4, 5])); // 15

// 2. Write a function that takes an array of numbers and returns the maximum number in the array using the reduce method.
function maxNumber(numbers) {
    return numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), numbers[0]);
}
console.log(maxNumber([1, 2, 3, 4, 5])); // 5

// 3. Write a function that takes an array of numbers and returns the minimum number in the array using the reduce method.
function minNumber(numbers) {
    return numbers.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue), numbers[0]);
}
console.log(minNumber([1, 2, 3, 4, 5])); // 1

// 4. Write a function that takes an array of numbers and returns the average of the numbers using the reduce method.
function averageOfNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue / array.length, 0);
}
console.log(averageOfNumbers([1, 2, 3, 4, 5])); // 3

// 5. Write a function that takes an array of numbers and returns the product of the numbers using the reduce method.
function productOfNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}
console.log(productOfNumbers([1, 2, 3, 4, 5])); // 120

// 6. Write a function that takes an array of numbers and returns the number of even numbers in the array using the reduce method.
function evenNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => currentValue % 2 === 0 ? accumulator + 1 : accumulator, 0);
}
console.log(evenNumbers([1, 2, 3, 4, 5])); // 2

// 7. Write a function that takes an array of numbers and returns the number of odd numbers in the array using the reduce method.
function oddNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => currentValue % 2 !== 0 ? accumulator + 1 : accumulator, 0);
}
console.log(oddNumbers([1, 2, 3, 4, 5])); // 3

// 8. Write a function that takes an array of numbers and returns the number of positive numbers in the array using the reduce method.
function positiveNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => currentValue > 0 ? accumulator + 1 : accumulator, 0);
}
console.log(positiveNumbers([1, 2, 3, 4, 5])); // 5

// 9. Write a function that takes an array of numbers and returns the number of negative numbers in the array using the reduce method.
function negativeNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => currentValue < 0 ? accumulator + 1 : accumulator, 0);
}
console.log(negativeNumbers([1, 2, 3, 4, 5])); // 0

// 10. Write a function that takes an array of numbers and returns the number of zeros in the array using the reduce method.
function zeroNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => currentValue === 0 ? accumulator + 1 : accumulator, 0);
}
console.log(zeroNumbers([1, 2, 3, 4, 5])); // 0

// 11. Write a function that takes an array of numbers and returns the number of numbers greater than a given number using the reduce method.
function greaterNumbers(numbers, number) {
    return numbers.reduce((accumulator, currentValue) => currentValue > number ? accumulator + 1 : accumulator, 0);
}
console.log(greaterNumbers([1, 2, 3, 4, 5], 3)); // 2

// 12. Write a function that takes an array of numbers and returns the number of numbers less than a given number using the reduce method.
function lessNumbers(numbers, number) {
    return numbers.reduce((accumulator, currentValue) => currentValue < number ? accumulator + 1 : accumulator, 0);
}
console.log(lessNumbers([1, 2, 3, 4, 5], 3)); // 2

// 13. Write a function that takes an array of numbers and returns the number of numbers equal to a given number using the reduce method.
function equalNumbers(numbers, number) {
    return numbers.reduce((accumulator, currentValue) => currentValue === number ? accumulator + 1 : accumulator, 0);
}
console.log(equalNumbers([1, 2, 3, 4, 5], 3)); // 1

// 14. Write a function that takes an array of numbers and returns the number of numbers between two given numbers using the reduce method.
function betweenNumbers(numbers, number1, number2) {
    return numbers.reduce((accumulator, currentValue) => currentValue > number1 && currentValue < number2 ? accumulator + 1 : accumulator, 0);
}
console.log(betweenNumbers([1, 2, 3, 4, 5], 2, 4)); // 2

// 15. Write a function that takes an array of numbers and returns the number of numbers that are multiples of a given number using the reduce method.
function multiplesNumbers(numbers, number) {
    return numbers.reduce((accumulator, currentValue) => currentValue % number === 0 ? accumulator + 1 : accumulator, 0);
}
console.log(multiplesNumbers([1, 2, 3, 4, 5], 2)); // 2

// Lets combine some names
const nameChar = ['F', 'l', 'a', 'v', 'o', 'u', 'r', 'i', 's', 't', 'h', 'e', 's', 'p', 'i', 'c', 'e', 'o', 'f', 'l', 'i', 'f', 'e'];
const concatedName = nameChar.reduce((accumulator, currentValue) => accumulator + currentValue, '');
console.log(concatedName); // Flavouristhespiceoflife

const info = {
    name: 'John',
    age: 25,
    city: 'New York'
}
console.log(Object.keys(info)); // [ 'name', 'age', 'city' ]
const keys = ['name', 'age', 'city'];
const values = ['John', 25, 'New York'];

const infoObject = keys.reduce((objectAccumulator, nextKey, currentIndex) => {
    objectAccumulator[nextKey] = values[currentIndex];
    return objectAccumulator;
}, {});
console.log(infoObject); // { name: 'John', age: 25, city: 'New York' }