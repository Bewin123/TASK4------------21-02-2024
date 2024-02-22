/* Create a function that takes a string and returns it as an integer. */

function toInteger(mystr) {
	let result = parseInt(mystr, 10);
	return isNaN(result) ? -1 : result;
}
// Example usage:
let strInput = "42";
let intOutput = toInteger(strInput);
console.log(`Converted value: ${intOutput}`);
/*
Lines For TestCase
toInteger("6");
toInteger("1000");
toInteger("12");
*/