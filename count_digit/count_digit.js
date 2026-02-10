function countDigitThree(n) {
    let count = 0;

    while (n > 0) {
        let digit = n % 10;  // Extract last digit

        if (digit === 3) { // Check if digit is 3
            count++;  // Increase counter
        }

        n = Math.floor(n / 10); // Remove last digit
    }

    return count; // Return total count
}

console.log(countDigitThree(3330)); 