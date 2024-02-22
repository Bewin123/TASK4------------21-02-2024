/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
	return word1.length === word2.length;
}

// Example usage:
let firstWord = "GUVI";
let secondWord = "CODE";
let result = isSameLength(firstWord, secondWord);

console.log(`Are the words of the same length? ${result}`);

/*
Lines For TestCase

isSameLength("GUVI", "GEEK");
isSameLength("GUVI", "ZEN");
isSameLength("Hello", "GUVI");
*/