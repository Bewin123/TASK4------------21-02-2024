/* Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */

function divisibleByFive(num1) {
	// Your code starts here
	return num1 % 5 === 0;
	// Your code ends here
}

// Example usage:
console.log(divisibleByFive(15)); // Output: true
console.log(divisibleByFive(8)); // Output: false

/*
Lines For TestCase

divisibleByFive(5);
divisibleByFive(-55);
divisibleByFive(37);
*/