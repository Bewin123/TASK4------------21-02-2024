/* Create a function that takes height and width and finds the perimeter of a rectangle. */

function findPerimeter(height, width) {
	return 2 * (height + width);
}

// Example usage:
let rectangleHeight = 5;
let rectangleWidth = 8;
let perimeter = findPerimeter(rectangleHeight, rectangleWidth);
console.log(`The perimeter of the rectangle is: ${perimeter}`);

/*
Lines For TestCase

findPerimeter(6, 7); 
findPerimeter(20, 10);
findPerimeter(2, 9);
*/