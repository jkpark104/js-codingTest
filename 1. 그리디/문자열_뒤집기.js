const { intersection } = require("lodash")

const input_data = '0001100'


const array = [0, 0]

let n = undefined
for (let i of input_data) {
  i = parseInt(i)
  if (n !== i) {
    array[i] += 1
    n = i
  }
}

console.log(Math.min(...array))