// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const a = 10;
const b = 20;
const c = 19;
const s = (a + b + c) / 2;

const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

console.log(area);