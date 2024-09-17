function mergeObjects(...obj){
    let newObj = {};
    obj.forEach((object) => {
        for(let key in object){
            newObj[key] = object[key];
        }
    });
    return newObj;
}
const obj1 = {a:1, b:2};
const obj2 = {b:3, c:4};
console.log(mergeObjects(obj1, obj2));