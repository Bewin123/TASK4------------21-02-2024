/* Write a function that converts hours into seconds. */

function hourToSeconds(hours) {
	return hours * 3600; // 1 hour is equal to 3600 seconds
}

// Example usage:
let hoursInput = 2;
let secondsOutput = hourToSeconds(hoursInput);
console.log(`${hoursInput} hours is equal to ${secondsOutput} seconds.`);

/*
Lines For TestCase

hourToSeconds(24);
hourToSeconds(10);
hourToSeconds(2);
*/