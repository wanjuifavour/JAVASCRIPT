//Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.

function removeDuplicates(str) {
    let seen = new Set();
    let result = '';

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

console.log(removeDuplicates("programming"));
console.log(removeDuplicates("hello world"));
console.log(removeDuplicates("aaaaa"));
console.log(removeDuplicates("abcd"));
console.log(removeDuplicates("aabbcc"));