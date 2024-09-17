function combineArrays(...arrays){
    let combinedArray = [];
    arrays.forEach(array => {
        combinedArray = [...combinedArray, ...array];
    });
    let revisedArray = combinedArray.filter((value, index) => {
        return combinedArray.indexOf(value) === index;
    });
    
    return revisedArray;
}
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];
console.log(combineArrays(arr1, arr2, arr3));
