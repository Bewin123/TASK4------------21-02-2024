const isPalindrome = (str) => str === str.split("").reverse().join("");

const getPalindromes = (arr) => arr.filter((str) => isPalindrome(str));
