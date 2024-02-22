/* Given an object and a key, "removeProperty" removes the given key from the given object. */

var obj = {
	"mykey": "value"
};

function removeProperty(obj, key) {
	// Your code starts here
	delete obj[key];
	// Your code ends here
}

// Example usage:
removeProperty(obj, "mykey");

// Check the updated object
console.log(obj);

/*
Lines For TestCase

obj.mykey === undefined;
*/