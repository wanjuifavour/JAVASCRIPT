const name = 'Favour'
// We can not reassign constant variables
const names = ['Favour', 'John', 'Jane', 'Doe']

names[1] = 'Wanjui'
console.log(names) // Favour, Wanjui, Jane, Doe
// In Js arrays are parsed by reference not by value

// How to access an array
const marks = [10, 20, 30, 40, 50]
console.log(marks[0]) // 10
// You access by passing the index of the element you want to access


// How to print the whole array
console.log(marks) // 10, 20, 30, 40, 50
// This will print the whole array
// Do not pass the index of the array

// How to modify an array - arrayName[index] = newValue
marks[2] = 100
console.log(marks[2]) // 100
// This will modify the value at index 2 to 100

// How to add an element to an array using the push method
// arrayName.push(value)
// This will add the value to the end of the array
marks.push(200)
console.log(marks) // 10, 20, 100, 40, 50, 200

let dennisInfo = [
    'Dennis',
    ['0722', '0733', '0711'],
    {idNumber: '123456',location: 'Nairobi', country: 'Kenya'},
]
console.log(dennisInfo)
dennisInfo.push({univerity: 'Dekut', course: 'Computer Science'})
console.log(dennisInfo) // Dennis, 0722, 0733, 0711, {idNumber: '123456',location: 'Nairobi', country: 'Kenya'}, {univerity: 'Dekut', course: 'Computer Science'}

// How to remove an element from an array
// arrayName.pop()
// This will remove the last element from the array
dennisInfo.pop()
console.log(dennisInfo) // Dennis, 0722, 0733, 0711, {idNumber: '123456',location: 'Nairobi', country: 'Kenya'}

// remove the first element from the array
// arrayName.shift()
dennisInfo.shift()
console.log(dennisInfo) // 0722, 0733, 0711, {idNumber: '123456',location: 'Nairobi', country: 'Kenya'}
// This will remove the first element from the array

// insert an element at the beginning of the array 
// arrayName.unshift(value)
dennisInfo.unshift('Dennis')
console.log(dennisInfo) // Dennis, 0722, 0733, 0711, {idNumber: '123456',location: 'Nairobi', country: 'Kenya'}
// This will add the value at the beginning of the array

//indexOf() method
// arrayName.indexOf(value)
// This will return the index of the value in the array
console.log(dennisInfo.indexOf('Dennis')) // 0
// This will return the index of the value in the array

const favourInfo = [
    'Favour',
    ['0722', '0733', '0711'],
    {idNumber: '123456',location: 'Nairobi', country: 'Kenya'},
]
console.log(favourInfo.indexOf('wanjui')) // -1
// This will return -1 since the value is not in the array
// If the value is in the array it will return the index of the value
// -1 means the value is not in the array

// How to join an array
// concat() method

const markMwangi = ['Mark', 'Mwangi']
const alex = ['alex', 'wanjui']
const combined = markMwangi.concat(alex)
console.log(combined) // Mark, Mwangi, Alex, Wanjui

// Joining arrays into a string
// use join() method with optional parameter
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
console.log(months.join()) // Jan,Feb,Mar,Apr,May

console.log(months.join('-')) // Jan-Feb-Mar-Apr-May
// this will join the array into a string with a hyphen between the elements

console.log(months.join(' ')) // Jan Feb Mar Apr May
// this will join the array into a string with a space between the elements

// Modifying an array using splice() method
// arrayName.splice(index, howMany, value1, value2, ...)
// splice() method can be used to remove, replace, add new items to an array
// index - the position to start modifying the array
// howMany - how many elements to remove from the array
// value1, value2, ... - the values to add to the array

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.splice(2, 0,)
console.log(fruits) // Banana, Orange, Mango
// This will remove the element at index 2
// and add the values to the array
// The first parameter is the index to start modifying the array
// The second parameter is the number of elements to remove
// if the second parameter is 0 no elements will be removed
// The third parameter is the values to add to the array
// If the third parameter is not provided no values will be added

fruits.splice(2, 1, 'Lemon', 'Kiwi')
console.log(fruits) // Banana, Orange, Lemon, Kiwi, Mango
// This will remove the element at index 2
// and add the values to the array

console.log(fruits.splice(1)); // Orange
// This will remove the element at index 1
// and return the removed element

// How to create subarrays using splice() method
const miezi = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
const subMonths = miezi.splice(2)
console.log(subMonths) // Mar, Apr, May
console.log(miezi) // Jan, Feb
// This will create a subarray from the main array
// starting from the index provided
// and return the subarray
// The main array will be modified
// The main array will contain the elements before the index provided
// and the subarray will contain the elements after the index provided


//HOW TO CREATE A SUBARRAY USING SLICE() METHOD
// arrayName.slice(start, end)
const cars = ['BMW', 'Benz', 'Toyota', 'Nissan', 'Subaru']
const subCars = cars.slice(2)
console.log(subCars) // Toyota, Nissan, Subaru
cosole.log(cars) // BMW, Benz
// This will create a subarray from the main array