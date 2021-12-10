const input_data = `
K1KA5CB7
`.trim()

let num = 0
const res = []

for (let i of input_data) {
  const is_digit = (i>='0') && (i<='9') ? true : false

  if (is_digit) {
    num += parseInt(i)
  } else {
    res.push(i)
  }
}
res.sort()
res.push(num.toString())
const ans = res.reduce((acc, val) => acc+val)
console.log(ans)