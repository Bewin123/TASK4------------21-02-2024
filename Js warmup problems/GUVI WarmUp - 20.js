/* Given an object and a key, "getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return null. */

var obj = {
	mykey: 'value'
};

function getProperty(obj, key) {
	// Check if the key exists in the object
	if (obj.hasOwnProperty(key)) {
		return obj[key];
	} else {
		// Handle undefined case
		return null;
	}
}

// Example usage:
var keyToCheck = 'mykey';
var propertyValue = getProperty(obj, keyToCheck);

// Check if the value is undefined before displaying
if (propertyValue !== null) {
	console.log(`The value of ${keyToCheck} is: ${propertyValue}`);
} else {
	console.log(`The property ${keyToCheck} does not exist in the object.`);
}


/*
Lines For TestCase

getProperty(obj,'mykey');
getProperty(obj,'dummykey');
*/