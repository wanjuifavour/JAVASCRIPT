const student = {
    name: "John Doe",
    age: 20
};

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

console.log(hasProperty(student, "name")); 
console.log(hasProperty(student, "age")); 