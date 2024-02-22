/* Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’. */

function getNthElement(array, n) {
	// Check if the array is not empty and if the index is within bounds
	if (array.length > 0 && n >= 0 && n < array.length) {
		return array[n];
	} else {
		return undefined;
	}
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
let index = 2;
let nthElement = getNthElement(myArray, index);
console.log(`The element at index ${index} is: ${nthElement}`);

/*
Lines For TestCase

getNthElement([1, 3, 5], 1);
getNthElement([1, 3, 5], 2);
getNthElement([], 2);
*/