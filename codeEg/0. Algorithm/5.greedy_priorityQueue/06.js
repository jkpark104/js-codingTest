class MaxHeap {
  constructor() {
    this.heap = [];
    this.heap.push(Number.MAX_SAFE_INTEGER);
  }

  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length - 1);
  }

  upheap(pos) {
    const tmp = this.heap[pos];
    while (tmp > this.heap[Math.floor(pos / 2)]) {
      this.heap[pos] = this.heap[Math.floor(pos / 2)];
      pos = Math.floor(pos / 2);
    }
    this.heap[pos] = tmp;
  }

  get() {
    if (this.size() === 1) return this.heap.pop();
    const res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return res;
  }

  downheap(pos, len) {
    const tmp = this.heap[1];
    let child;
    while (pos <= Math.floor(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] < this.heap[child + 1]) child += 1;
      if (tmp >= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }

  size() {
    return this.heap.length - 1;
  }

  show() {
    for (let i = 1; i <= this.size(); i++) {
      console.log(this.heap[i]);
    }
  }
}

const solution = nums => {
  const heap = new MaxHeap();

  nums.sort((a, b) => b[1] - a[1]);

  const maxDay = nums[0][1];

  let ans = 0;
  for (let i = maxDay; i > 0; i--) {
    while (nums.length && nums[0][1] === i) {
      const cost = nums.shift()[0];
      heap.insert(cost);
    }
    ans += heap.get();
  }

  return ans;
};

console.log(
  solution([
    [50, 2],
    [20, 1],
    [40, 2],
    [60, 3],
    [30, 3],
    [30, 1]
  ])
);
console.log(
  solution([
    [50, 2],
    [40, 2],
    [20, 1],
    [10, 1]
  ])
);
