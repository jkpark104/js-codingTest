/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

const longestSubarray = (nums, limit) => {
  const minQ = [];
  const maxQ = [];

  let start = 0;
  let ans = 0;
  for (let end = 0; end < nums.length; end++) {
    while (minQ.length && minQ[minQ.length - 1] < nums[end]) minQ.pop();
    while (maxQ.length && maxQ[maxQ.length - 1] > nums[end]) maxQ.pop();

    minQ.push(nums[end]);
    maxQ.push(nums[end]);

    // lt += 1
    while (Math.abs(minQ[0] - maxQ[0]) > limit) {
      if (nums[start] === maxQ[0]) maxQ.shift();
      if (nums[start] === minQ[0]) minQ.shift();
      start += 1;
    }

    console.log({ minQ, maxQ });

    ans = Math.max(ans, end - start + 1);
  }

  return ans;
};

console.log(longestSubarray([8, 2, 4, 7], 4));
// console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
// console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0));
