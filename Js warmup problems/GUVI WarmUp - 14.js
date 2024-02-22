/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

// Function to get full name
function getFullName(firstName, lastName) {
	return firstName + ' ' + lastName;
}

// Example usage
var firstName = "GUVI";
var lastName = "GEEK";
var fullName = getFullName(firstName, lastName);

// Output the full name
console.log("Full Name: " + fullName);






/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/