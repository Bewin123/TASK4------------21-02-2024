/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(minutes, fps) {
	// Assuming 60 seconds per minute
	const secondsPerMinute = 60;
	
	// Calculate the number of frames
	const numberOfFrames = minutes * fps * secondsPerMinute;
	
	return numberOfFrames;
}

// Example usage:
let minutesInput = 3;
let fpsInput = 24;
let result = frames(minutesInput, fpsInput);
console.log(`Number of frames: ${result}`);

/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/