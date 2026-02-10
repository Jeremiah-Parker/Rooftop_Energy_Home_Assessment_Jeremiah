// Division and remainder using subtraction only (no Math.abs)
function divMod(x, y) {

    if (y === 0) {
        return { error: "Division by zero is not allowed" };
    }

    let quotient = 0;
    let remainder = x;

    // Track signs
    let negativeResult = false;

    if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
        negativeResult = true;
    }

    // Convert x to positive manually
    if (remainder < 0) {
        remainder = -remainder;
    }

    // Convert y to positive manually
    if (y < 0) {
        y = -y;
    }

    // Repeated subtraction
    while (remainder >= y) {
        remainder = remainder - y;
        quotient = quotient + 1;
    }

    // Apply sign to quotient
    if (negativeResult) {
        quotient = -quotient;
    }

    // Remainder follows sign of original x
    if (x < 0) {
        remainder = -remainder;
    }

    return {
        quotient: quotient,
        remainder: remainder
    };
}

// Test
console.log(divMod(16, 5));
console.log(divMod(-16, 5));
console.log(divMod(16, -5));
console.log(divMod(-16, -5));
