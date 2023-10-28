export function sortArray(arr, ascending) {
    const compareFunction = (a, b) => (ascending ? a - b : b - a);
    return arr.sort(compareFunction);
}