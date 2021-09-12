class MaxHeap {
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
    while (tmp > this.heap[Math.floor(pos / 2)]) {
      this.heap[pos] = this.heap[Math.floor(pos / 2)]
      pos = Math.floor(pos / 2)
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
    while (pos <= Math.floor(len / 2)) {
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

function solution(nums) {
  const heap = new MaxHeap();
  for (const num of nums) heap.insert(num);

  while (heap.size() > 1) {
    const x = heap.get()
    const y = heap.get()

    if (x !== y) heap.insert(x - y);
  }
  return heap.size();
}

console.log(solution([5, 2, 4, 3, 1]))
console.log(solution([7, 6, 3, 2, 4, 5, 1]))
console.log(solution([5, 4, 3, 6, 7, 2, 9]))
