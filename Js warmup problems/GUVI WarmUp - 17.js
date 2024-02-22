/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Example usage:
let distance = getDistance(1, 2, 4, 6);
console.log(`The distance between the points is: ${distance}`);




/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/