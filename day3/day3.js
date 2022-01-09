const fs = require("fs");

const data = fs.readFileSync("./data.txt").toString().split("\n")

//PART 1
const countBits = ( array=data )  => {
  const binaryNumberLength = array[0].length;
  const binaryNumberArrays = new Array(binaryNumberLength).fill([])
  
  const allBitNumbers = binaryNumberArrays.map( (a,i) => {
    return data.map(code => { return code.charAt(i)})
  })
 
  const zeroCounting = allBitNumbers.map(array => {
    return array.filter( bit => bit == '0').length
  })

  const oneCounting = allBitNumbers.map(array => {
    return array.filter( bit => bit == '1').length
  })
  return {zeroCounting, oneCounting};
}

const gammabits = countBits(data).zeroCounting.map(quantity => {
    return quantity > (data.length/2) ? 0 : 1
})

const gamma = gammabits.join('')


const ellipsonbits = countBits(data).zeroCounting.map(quantity => {
    return quantity < (data.length/2) ? 0 : 1
})

const ellipson = ellipsonbits.join('')

//power consumption = gamma rate * ellipson rate
console.log("Power consumption", parseInt(ellipson, 2) * parseInt(gamma, 2))

//PART2

const filterMostCommon = (numbers, i=0) => {
  const mostcommonbit= countBits(numbers).zeroCounting[i] > countBits(numbers).oneCounting[i] ? 0 : 1
  const criteria = countBits(numbers).zeroCounting[i] == countBits(numbers).oneCounting[i] ? 1 : mostcommonbit;

  const mostCommonNumbers = numbers.filter(number => number[i] == criteria)
  if (mostCommonNumbers.length == 2) {
    return mostCommonNumbers[1]
  } else {
    return filterMostCommon(mostCommonNumbers, i + 1)
  }
}

const filterLeastCommon = (numbers, i=0) => {
  const leastcommonbit= countBits(numbers).zeroCounting[i] < countBits(numbers).oneCounting[i] ? 0 : 1;
  const criteria = countBits(numbers).zeroCounting[i] == countBits(numbers).oneCounting[i] ? 0 : leastcommonbit;

  const leastCommonNumbers = numbers.filter(number => number[i] == criteria)
  if (leastCommonNumbers.length == 2) {
    return leastCommonNumbers[1]
  } else {
    return filterLeastCommon(leastCommonNumbers, i + 1)
  }
}
console.log(filterMostCommon(data))
console.log(filterLeastCommon(data))
console.log(parseInt(filterMostCommon(data),2))
console.log(parseInt(filterLeastCommon(data),2))
console.log("support rating",parseInt(filterMostCommon(data),2)*parseInt(filterLeastCommon(data),2) )
