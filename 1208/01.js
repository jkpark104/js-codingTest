function solution(nums, k) {
  const hash = {};

  nums.sort((a, b) => a - b);

  const result = new Set();

  for (const num of nums) {
    if (hash[num + k]) result.add(`${num}${num + k}`);

    if (hash[num - k]) result.add(`${num - k}${num}`);

    hash[num] = 1;
  }

  return result.size;
}

console.log(solution([3, 1, 4, 1, 5], 2));
console.log(solution([1, 2, 3, 4, 5], 1));
console.log(solution([1, 3, 1, 5, 4], 0));
console.log(solution([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3));
console.log(solution([-1, -2, -3], 1));
