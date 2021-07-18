const input_data = `
123402
7755
`.trim().split('\n')

for (data of input_data) {
  data = data.split('').map(x => parseInt(x))
  leftSum = sum(data.slice(0, data.length/2))

  if (sum(data)-leftSum === leftSum) {
    console.log('LUCKY')
  } else {
    console.log('READY')
  }
}

function sum(data) {
  let sum = 0
  for (el of data) {
    sum += el
  }
  return sum
}