import { min, max, range, zip, uniq, sortNum } from "./arrayLista.js";

console.log(min([1, 4, 2, 6, 10, 3]));
console.log(min([1, 4, -1, 6, 10, 3]));

console.log(max([1, 4, 2, 6, 10, 3]));

console.log(range(10));
console.log(range(1, 11));
console.log(range(0, 30, 5));

console.log(zip(["moe", "larry"], [30, 40]));
console.log(zip(["moe", "larry", "curly"], [30, 40, 50], [true, false, false]));

console.log(uniq([1, 2, 1, 4, 1, 3]));
console.log(uniq([1, 2, 1, 3, 3]));

console.log(sortNum([1, 3, 2]));
console.log(sortNum([1, 2, 10, 3, 32]));
