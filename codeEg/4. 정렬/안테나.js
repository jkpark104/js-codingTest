const input_data = `
5 1 7 9
`.trim()

const n = 4

const data = input_data.split(' ').map(Number)
const l = data.length - 1
data.sort((a,b)=>(a-b))

console.log(data[parseInt(l / 2)])