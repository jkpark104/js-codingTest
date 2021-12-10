const input_data = `
02984
`.trim()

const data = input_data.split('').map(Number)

let val = data[0]

for (let i=1; i<data.length; i++) {
  if (val <= 1 || data[i] <= 1) {
    val += data[i]
  } else {
    val *= data[i]
  }
}

console.log(val)