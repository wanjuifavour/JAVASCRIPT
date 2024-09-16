// Modify the palindrome function to be case insensitive,
// meaning it should ignore upper and lower case differences when checking for a palindrome.

function isCaseInsensitivePalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example
console.log(isCaseInsensitivePalindrome("Aba"));
console.log(isCaseInsensitivePalindrome("Racecar"));
console.log(isCaseInsensitivePalindrome("Palindrome"));
console.log(isCaseInsensitivePalindrome("Madam"));
console.log(isCaseInsensitivePalindrome("Hello"));
