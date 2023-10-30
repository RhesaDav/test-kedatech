import { fishAndBash } from "./functions/one.js";
import { sortArrayNum } from "./functions/two.js";
import { reverseString } from "./functions/three.js";

console.log("Test Case 1:");
fishAndBash(9);
console.log("Test Case 2:");
fishAndBash(10);
console.log("Test Case 3:");
fishAndBash(30);

console.log("Test Case 4:");
console.log(sortArrayNum([5, 2, 9, 1, 5, 6], true));
console.log("Test Case 5:");
console.log(sortArrayNum([5, 2, 9, 1, 5, 6], false));

console.log("Test Case 6:");
console.log(reverseString("radar"));
console.log("Test Case 7:");
console.log(reverseString("hello"));
