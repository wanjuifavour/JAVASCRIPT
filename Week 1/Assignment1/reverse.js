//Write a function to reverse a given string.

let textString = prompt("Enter a string to reverse: ");
let revString = textString
        .split('')
        .reverse()
        .join('');
console.log(revString);