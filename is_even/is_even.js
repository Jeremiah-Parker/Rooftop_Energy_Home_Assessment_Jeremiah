
// To allow prompt in node.js terminal environment
const prompt = require('prompt-sync')();

const n = Number(prompt("Enter the number: "));


// Print whether the number is odd or even based on number
if(n % 2 == 0) {
    console.log("The number is even.");
}

else{
    console.log("The number is odd.");
}