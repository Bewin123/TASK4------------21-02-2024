/* MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:turkey = 2 legshorse = 4 legspigs = 4 legsThe farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. */

function CountLegs(turkey, horse, pigs) {
	// Your code starts here
	const legsPerTurkey = 2;
	const legsPerHorse = 4;
	const legsPerPig = 4;
	
	const totalLegs = (turkey * legsPerTurkey) + (horse * legsPerHorse) + (pigs * legsPerPig);
	return totalLegs;
	// Your code ends here
}

// Example usage:
let turkeyCount = 2;
let horseCount = 3;
let pigCount = 5;

let totalLegsCount = CountLegs(turkeyCount, horseCount, pigCount);
console.log(`Total number of legs: ${totalLegsCount}`);

/*
Lines For TestCase

CountLegs(2, 3, 5);
CountLegs(1, 2, 3);
CountLegs(5, 2, 8);
*/