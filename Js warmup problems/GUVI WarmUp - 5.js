/* Create a function that takes an array and returns the first element. */

function getFirstElement(arr) {
	if (arr.length > 0) {
		return arr[0];
	} else {
		return undefined; // or any other value you want to return for an empty array
	}
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
let firstElement = getFirstElement(myArray);
console.log(`The first element of the array is: ${firstElement}`);

/*
Lines For TestCase

getFirstElement([1, 2, 3]);
getFirstElement([80, 5, 100]);
getFirstElement([-500, 0, 50]);
*/