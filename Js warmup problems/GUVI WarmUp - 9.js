/* There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value. */

function remainder(num1, num2) {
	// Your code starts here
	return num1 % num2;
	// Your code ends here
}

// Example usage:
let number1 = 10;
let number2 = 3;
console.log(remainder(number1, number2)); // Output: 1

/*
Lines For TestCase

remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);
*/