
const fs = require("fs");

//PART 1
// Make array with the puzzle inputs
const data = fs.readFileSync("./data.txt").toString().split("\n").map((move)=>{
    const [direction, number] = move.split(" ");
    return {
        direction: direction,
        number: parseInt(number)
    }
})

//initial horizontal position and depth
let horizontal = 0
let depth = 0

//add x steps depending on direction
data.map( position => {{
    switch(position.direction) {
        case "forward":
            horizontal += position.number;
            break
        case "down":
            depth += position.number;
            break
        case "up":
            depth -= position.number;
            break;
    }
}}) 

console.log(horizontal * depth)

//PART2
let horizontal2 = 0
let depth2 = 0
let aim = 0;

data.map( position => {{
    switch(position.direction) {
        case "forward":
            horizontal2 += position.number;
            depth2 += aim * position.number;
            break
        case "down":
            aim += position.number;
            break
        case "up":
            aim -= position.number;
            break;
    }
}}) 

console.log(horizontal2 * depth2)