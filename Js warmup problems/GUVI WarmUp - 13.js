/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	// Your code starts here
	if (typeof num !== 'number' || isNaN(num)) {
		return -1; // Return -1 for invalid input
	}
	
	return num % 2 === 0;
	// Your code ends here
}

// Example usage:
console.log(isEven(6)); // Output: true
console.log(isEven(7)); // Output: false
console.log(isEven("abc")); // Output: -1 (invalid input)

/*
Lines For TestCase

isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/