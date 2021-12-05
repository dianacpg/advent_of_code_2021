const fs = require("fs");

//PART 1
// Make array with the puzzle inputs
const data = fs.readFileSync("./data.txt").toString().split("\n")

const firstBits = data.map(code => { return code.charAt(0)})
const secondBits = data.map(code => { return code.charAt(1)})
const thirdBits = data.map(code => { return code.charAt(2)})
const fourthBits = data.map(code => { return code.charAt(3)})
const fifthBits = data.map(code => { return code.charAt(4)})
const sixthBits = data.map(code => { return code.charAt(5)})
const seventhBits = data.map(code => { return code.charAt(6)})
const eightBits = data.map(code => { return code.charAt(7)})
const ninthBits = data.map(code => { return code.charAt(8)})
const tenthBits = data.map(code => { return code.charAt(9)})
const eleventhBits = data.map(code => { return code.charAt(10)})
const twelfthBits = data.map(code => { return code.charAt(11)})

const totalBitsArray = [firstBits, secondBits, thirdBits, fourthBits, fifthBits, sixthBits, seventhBits, eightBits, ninthBits, tenthBits, eleventhBits, twelfthBits ]

const zeroCounts = totalBitsArray.map(array => {
   return array.filter( bit => bit == '0').length
})

const gammabits = zeroCounts.map(quantity => {
    return quantity > (data.length/2) ? 0 : 1
})

const gamma = gammabits.join('')

console.log("gamma",parseInt(gamma, 2))

const ellipsonbits = zeroCounts.map(quantity => {
    return quantity < (data.length/2) ? 0 : 1
})

const ellipson = ellipsonbits.join('')

console.log("ellipson", parseInt(ellipson, 2) * parseInt(gamma, 2) )