const fs = require("fs");

//PART 1
// Make array with the puzzle inputs
const data = fs.readFileSync("./data.txt").toString().split("\n")

//check how many bits each binary number has
const binaryNumberLength = data[0].length

//Creates a new array with the collection of the bits numbers for each binary number position
const binaryNumberArrays = new Array(binaryNumberLength).fill([])

const allBitNumbers = binaryNumberArrays.map( (array,i) => {
   return data.map(code => { return code.charAt(i)})
})


//Counts how many 0 bits for each bit position by filtering the each array
// and then checks its quantity on the bit array
//Gamma has the most common bit for each position
//Ellipson has the least common bit for each position
const zeroCounting = allBitNumbers.map(array => {
   return array.filter( bit => bit == '0').length
})

const gammabits = zeroCounting.map(quantity => {
    return quantity > (data.length/2) ? 0 : 1
})

const gamma = gammabits.join('')

console.log("gamma",parseInt(gamma, 2))

const ellipsonbits = zeroCounting.map(quantity => {
    return quantity < (data.length/2) ? 0 : 1
})

const ellipson = ellipsonbits.join('')

//power consumption = gamma rate * ellipson rate
console.log("ellipson", parseInt(ellipson, 2) * parseInt(gamma, 2) )