// Here I am learning about promises in JavaScript and how to use method chaining to handle asynchronous code.
// I am also learning about the .then() method and how to use it to handle the resolved value of a promise.
// I am also learning about the .catch() method and how to use it to handle the rejected value of a promise.
// Assuming we have to do 5 different tasks in a sequence, wake up, brush teeth, take a shower, get dressed, and eat breakfast.
// We can use promises to handle the asynchronous code of each task and use method chaining to handle the sequence of tasks.
// code example:
const wakeUp = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Wake up');
        }, 1000);
    });
};
// In the wakeUp function, we are returning a new promise that resolves after 1 second with the value 'Wake up'.
// we have used a an arrow function to define the wakeUp function.
// An arrow function is a shorter syntax for writing function expressions. Instead of using the function keyword, we use the arrow (=>) to define the function. One of the benefits of using arrow functions is that they do not have their own this value, which means they do not have their own context.
// A normal function declaration would look like this:
// function wakeUp() { 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Wake up');
//         }, 1000);
//     });
// }
// The arrow function declaration is shorter and more concise.