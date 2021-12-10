const solution = (nums, m) => {
  nums.sort((a, b) => a - b);

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === m) return mid + 1;

    nums[mid] > m ? (end = mid - 1) : (start = mid + 1);
  }
};

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
