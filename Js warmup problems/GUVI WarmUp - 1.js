/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(value) {
	if (typeof value === 'number' && isFinite(value) && Math.floor(value) === value) {
		return -value;
	} else {
		return -1;
	}
}
// Example usage:
console.log(getOpposite(5)); // Output: -5
console.log(getOpposite(-8)); // Output: 8
console.log(getOpposite("abc")); // Output: -1
/*
Lines For TestCase
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/