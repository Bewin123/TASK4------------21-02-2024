/* Create a function that takes a number as an argument, increments the number by +1 and returns the result. */

function nextNumber(myint) {
	if (typeof myint === 'number' && isFinite(myint) && Math.floor(myint) === myint) {
		return myint + 1;
	} else {
		return -1; // or handle the non-integer case according to your requirements
	}
}
// Example usage:
let currentNumber = 7;
let nextNum = nextNumber(currentNumber);
console.log(`The next number after ${currentNumber} is: ${nextNum}`);
/*
Lines For TestCase
nextNumber(0);
nextNumber(9);
nextNumber(-3);
*/