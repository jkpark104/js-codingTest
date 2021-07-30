"use strict"

class maxHeap {
  constructor() {
    this.heap = []
    this.heap.push(Number.MAX_SAFE_INTEGER)
  }

  insert(val) {
    this.heap.push(val)
    this.upheap(this.heap.length - 1)
  }

  upheap(pos) {
    const tmp = this.heap[pos]
    while (tmp > this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)]
      pos = parseInt(pos / 2)
    }
    this.heap[pos] = tmp
  }

  get() {
    if (this.size() === 1) return this.heap.pop()
    const res = this.heap[1]
    this.heap[1] = this.heap.pop()
    this.downheap(1, this.heap.length - 1)
    return res
  }

  downheap(pos, len) {
    const tmp = this.heap[1]
    let child
    while (pos <= parseInt(len / 2)) {
      child = pos * 2
      if (child < len && this.heap[child] < this.heap[child + 1]) child += 1
      if (tmp >= this.heap[child]) break
      this.heap[pos] = this.heap[child]
      pos = child
    }
    this.heap[pos] = tmp
  }

  size() {
    return this.heap.length - 1
  }

  show() {
    for (let i = 1; i <= this.size(); i++) {
      console.log(this.heap[i])
    }
  }
}

// function solution(nums) {
//   const chk = new Array(365).fill(0)
//   nums = nums.sort((a, b) => (b[0] - a[0]) || (b[1] - a[1]))

//   let ans = 0
//   for (let [cost, day] of nums) {
//     while (chk[day] !== 0 && day > 1) {
//       day -= 1
//     }
//     if (chk[day] === 0) {
//       chk[day] = 1
//       ans += cost
//     }
//   }
//   return ans
// }

console.log(solution([
  [50, 2],
  [20, 1],
  [40, 2],
  [60, 3],
  [30, 3],
  [30, 1],
]))
console.log(solution([
  [50, 2],
  [40, 2],
  [20, 1],
  [10, 1],
]))

function solution(nums) {
  nums.sort((a,b)=>(b[1]-a[1]))
  let maxDay = nums[0][1]
  const heap = new maxHeap()
  let ans = 0
  let idx = 0
  for (maxDay; maxDay > 0; maxDay--) {
    while (idx < nums.length && nums[idx][1] === maxDay) {
      heap.insert(nums[idx][0])
      idx += 1
    }
    if (heap.size()) ans += heap.get()
  }
  return ans
}