// ES6 is an updated version of JavaScript that allows for the use of new features and syntax. ES6 was released in 2015 and is also known as ECMAScript 6 or ECMAScript 2015. ES6 introduced many new features and syntax that make JavaScript more powerful and easier to use. Some of the new features and syntax introduced in ES6 include: new variable declarations, arrow functions, classes, template literals, and more. In this classwork, you will practice using some of the new features and syntax introduced in ES6.

    // let and const

// let and const are new ways to declare variables in ES6. let is used to declare variables that can be reassigned, while const is used to declare variables that cannot be reassigned.
// let is block scoped, while var is function scoped.

function greet() {
    if (true){
        let message = 'Hello';
        console.log(message);
    }
    console.log(message); // ReferenceError: message is not defined
}
// In this particular code snippet, the variable message is declared using the let keyword inside the if block. Since let is block scoped, the variable message is only accessible inside the if block. When we try to access the variable message outside the if block, we get a ReferenceError because the variable message is not defined.

const z = 10;
if (z === 10) {
    const z = 20;
    console.log(z); // 20
}
console.log(z); // 10
// Even though const cannot be reassigned, it can be shadowed by another variable with the same name inside a block. In this code snippet, the variable z is declared using the const keyword outside the if block and assigned the value 10. Inside the if block, another variable z is declared using the const keyword and assigned the value 20. When we log the value of z inside the if block, we get 20. When we log the value of z outside the if block, we get 10.

var y = 10;
if (y === 10) {
    var y = 20;
    console.log(y); // 20
}
console.log(y); // 20
// Var declaration is function scoped. In this code snippet, the variable y is declared using the var keyword outside the if block and assigned the value 10. Inside the if block, another variable y is declared using the var keyword and assigned the value 20. When we log the value of y inside the if block, we get 20. When we log the value of y outside the if block, we get 20. This is because var is function scoped, so the variable y is accessible both inside and outside the if block.



    // Arrow Functions




    // Classes



    // Template Literals

// Template literals are a new way to create strings in ES6. Template literals allow for string interpolation, multi-line strings, and the ability to embed expressions inside strings using backticks (`) instead of single quotes (') or double quotes (").
const name = 'Alice';
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Hello, my name is Alice and I am 30 years old.

// In this code snippet, we use template literals to create a string that includes the variables name and age. We use the ${} syntax to embed the variables inside the string. When we log the value of greeting, we get Hello, my name is Alice and I am 30 years old.

// Template literals also allow for multi-line strings, which can be useful for creating strings that span multiple lines without using escape characters.
const multiLineString = `This is a 
multi-line
string.`;
console.log(multiLineString);

// Tagged Templates
// Tagged templates are a feature of ES6 that allow you to customize the behavior of template literals by using a tag function. A tag function is a function that processes the template literal and returns a modified string. Tagged templates can be useful for escaping characters, formatting strings, or performing other operations on template literals.
// To create a tagged template, you define a function that takes an array of strings (the template literal parts) and an array of values (the interpolated values) as arguments. The function can then process the template literal parts and values and return a modified string.
function tagFunction(strings, ...values) {
    console.log(strings); // ["Hello, my name is ", " and I am ", " years old."]
    console.log(values); // ["Alice", 30]
    return 'Customized string';
}
// In this code snippet, we define a tag function called tagFunction that takes an array of strings (strings) and an array of values (values) as arguments. The tag function logs the template literal parts and values to the console and returns a customized string. To use the tag function with a template literal, you call the tag function before the template literal and pass the template literal parts and values as arguments.
// Example:
const jina = 'Alice';
const umri = 30;
const customizedString = tagFunction`Hello, my name is ${jina} and I am ${umri} years old.`;
console.log(customizedString); // Customized string
// In this code snippet, we call the tag function tagFunction before the template literal and pass the template literal parts and values as arguments. The tag function processes the template literal parts and values and returns a customized string. When we log the value of customizedString, we get Customized string.

// React jsx
const isAdmin = true;
function renderProfile() {
    return (
        <div>
            <h1>Welcome, {isAdmin ? 'Admin' : 'User'}</h1>
            <p>Profile content goes here...</p>
        </div>
    );
}
// In this code snippet, we use a template literal to create a JSX element that conditionally renders the text 'Admin' or 'User' based on the value of the isAdmin variable. The template literal allows us to embed expressions inside the JSX element using the ${} syntax.

// Destructuring