/* Given an object and a key, "addProperty" adds a new property on the given object with a value of true. */

var obj = {};

function addProperty(obj, key) {
	// Your code starts here
	obj[key] = true;
	// Your code ends here
}

// Example usage:
addProperty(obj, "mykey");

// Check the updated object
console.log(obj);

/*
Lines For TestCase

obj.mykey
*/