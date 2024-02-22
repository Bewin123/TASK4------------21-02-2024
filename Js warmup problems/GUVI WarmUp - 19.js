/* Given an array, "getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return '-1'. */

function getLastElement(array) {
	// Check if the array is not empty
	if (array.length > 0) {
		return array[array.length - 1];
	} else {
		return -1;
	}
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
let lastElement = getLastElement(myArray);
console.log(`The last element is: ${lastElement}`);

/*
Lines For TestCase

getLastElement([1, 2, 3, 4]);
getLastElement([1, 2, 3, 4,5,6,7]);
getLastElement([]);
*/