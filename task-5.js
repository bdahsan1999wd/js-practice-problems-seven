// 1. Step-by-Step version----------

// Generate random decimal 0 to 1
const rand = Math.random();
// console.log(rand);

// Calculate range size (max - min + 1)
const range = 20 - 10 + 1;
// console.log(range);

// Scale random number to range
const scaled = rand * range;
// console.log(scaled);

// Round down to nearest integer
const integerPart = Math.floor(scaled);
// console.log(integerPart);

// Shift by minimum value (start from 10)
const result = integerPart + 10;
console.log(result);



// 2. Compact version----------

// Generate random integer between 10 and 20 (inclusive)
const num = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(num);



// 3. function version----------

// Function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    // Math.random() 0 to < 1
    // Multiply by (max - min + 1) scales range
    // Math.floor() removes decimal part
    // Add min shifts range to start at min
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(10, 20));