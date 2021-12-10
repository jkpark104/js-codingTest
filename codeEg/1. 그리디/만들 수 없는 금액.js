"use strict"

const input_data = [3, 2, 1, 1, 9]

input_data.sort((a, b) => (a - b))

let target = 1

for (let x of input_data) {
  if (target < x) break

  target += x
}

console.log(target)