// Write a function to count how many distinct palindromes are in a given string.
//A palindrome is considered distinct based on its start and end position in the string.

function countPalindromes(s) {
    const n = s.length;
    let count = 0;
    const palindromes = new Set();

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < n && s[left] === s[right]) {
            palindromes.add(`${left},${right}`);
            left--;
            right++;
        }
    }

    for (let i = 0; i < n; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1); 
    }

    return palindromes.size;
}

console.log(countPalindromes("ababa"));
console.log(countPalindromes("racecar"));
console.log(countPalindromes("aabb"));
console.log(countPalindromes("a"));
console.log(countPalindromes("abc"));