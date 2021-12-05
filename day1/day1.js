
const fs = require("fs");

//PART 1
// Make array with the puzzle inputs
const data = fs.readFileSync("./data.txt").toString().split("\n").map(input => parseInt(input))

// count the number of times a depth measurement increases. Starting i=1 because i=0 is the first measurement
let increased = 0;
for (let i=1; i < data.length; i++) {
    if (data[i] > data[i-1]) {
        increased++;
    }
}

console.log(increased)

//PART2

let increasedSum = 0;

// count the number of times that sum os 3 increases. Starting i=3 because the first 3 are the the first sum measurement
for (let i=3; i < data.length; i++) {
    const currentSum = data[i] + data[i-1] + data[i-2]
    const lastSum = data[i-1] + data[i-2] + data[i-3]
    if (currentSum > lastSum) {
        increasedSum++;
    }
}

console.log(increasedSum)