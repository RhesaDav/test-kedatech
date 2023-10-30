export function fishAndBash(num) {
    if (num % 15 === 0) {
        console.log("fish bash");
    } else if (num % 3 === 0) {
        console.log("fish");
    } else if (num % 5 === 0) {
        console.log("bash");
    }
}
