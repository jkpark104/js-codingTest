const input_data = `
-15 -6 1 3 7
`.trim()

const n = 5

const data = input_data.split(' ').map(Number)

const ans = solution()
console.log(ans)

function solution() {
  let start = 0
  let end = data.length - 1

  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    
    if (mid === data[mid]) {
      return mid
    } else if (mid < data[mid]) {
      end = mid - 1 
    } else {
      start = mid + 1
    }
  }
}