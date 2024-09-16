// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string.

function longestCommonPrefix(strs) {
    if (!strs.length) return '';

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return '';
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));
console.log(longestCommonPrefix(["prefix", "prefixes", "preform"]));
console.log(longestCommonPrefix(["apple", "banana", "cherry"]));