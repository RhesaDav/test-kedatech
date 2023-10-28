import { printFishBash } from "./functions/one.js";
import { sortArray } from "./functions/two.js";
import { isPalindrome } from "./functions/three.js";

console.log("Test Case 1:");
printFishBash(9);
console.log("Test Case 2:");
printFishBash(10);
console.log("Test Case 3:");
printFishBash(30);

console.log("Test Case 4:");
console.log(sortArray([5, 2, 9, 1, 5, 6], true));
console.log("Test Case 5:");
console.log(sortArray([5, 2, 9, 1, 5, 6], false));

console.log("Test Case 6:");
console.log(isPalindrome("radar"));
console.log("Test Case 7:");
console.log(isPalindrome("hello"));
