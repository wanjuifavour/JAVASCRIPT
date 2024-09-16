// Write a function to check if two given strings are anagrams of each other.
// Two strings are anagrams if they contain the same characters in the same frequency but in different orders.

function areAnagrams(string1, string2) {
    let sortedString1 = string1
            .replace(/[^a-zA-Z0-9]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    let sortedString2 = string2
            .replace(/[^a-zA-Z0-9]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    if (sortedString1 === sortedString2) {
        return true;
    } else return false;
}
console.log(areAnagrams('Listen', 'Silent'));
console.log(areAnagrams('Hello', 'World'));