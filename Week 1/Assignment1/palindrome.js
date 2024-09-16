//Write a function to determine if a given string is a palindrome.
//A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).

function isPalindrome(string) {
    let revString = string
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('')
    .reverse()
    .join('');
    if (string.toLowerCase().replace(/[^a-z0-9]/g, '') === revString) {
        return true;
    } else return false;
}

console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome('Hello world'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('Hannah'));
