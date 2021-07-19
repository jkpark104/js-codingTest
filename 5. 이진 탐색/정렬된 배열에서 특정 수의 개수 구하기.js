const input = `
1 1 2 2 2 2 3
`.trim().split('\n')

const [n, x] = [7,2]

for (let i of input) {
  data = i.split(' ').map(Number)
  const left_idx = binary_search_left(data, x)
  const right_idx = binary_search_right(data, x)

  res = right_idx-left_idx+1
  if (res == 0) {
    console.log(-1)
  } else {
    console.log(res)
  }
}

function binary_search_left(array, target) {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    if (target === array[mid] && (mid === 0 || array[mid-1] !== array[mid])) {
      return mid
    }
    else if (target > array[mid]) {
      start = mid + 1
    }
    else {
      end = mid - 1
    }
  }
}

function binary_search_right(array, target) {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    let mid = parseInt((start + end) / 2)

    if (target === array[mid] && (mid === array.length-1 || array[mid+1] !== array[mid])) {
      return mid
    }
    else if (target < array[mid]) {
      end = mid - 1
    }
    else {
      start = mid + 1
    }
  }

}