function all_properties(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(prop) {
        return typeof obj[prop] === 'function';
    });
}

console.log(all_properties(Array));