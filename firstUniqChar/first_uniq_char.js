// Find first non-repeating character in string
function firstUniqChar(str) {

    let freq = {}; // map to store character count

    // Count frequency of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // If character is not in map, initialize count to 1, otherwise increase count
        if (freq[char] === undefined) {
            freq[char] = 1;
        } else {
            freq[char] = freq[char] + 1;
        }
    }

    // Find first character with count = 1
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]] === 1) {
            return str[i];
        }
    }

    return null;
}

// Test
console.log(firstUniqChar("parallel")); 
console.log(firstUniqChar("aabbccdd"));   // null