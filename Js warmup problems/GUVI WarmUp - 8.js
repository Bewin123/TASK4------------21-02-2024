/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. */

function lessThan100(num1, num2) {
	// Your code starts here
	let sum = num1 + num2;
	return sum < 100;
	// Your code ends here
}

// Example usage:
let number1 = 30;
let number2 = 40;
console.log(lessThan100(number1, number2)); // Output: true

/*
Lines For TestCase

lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(50, 50);
*/