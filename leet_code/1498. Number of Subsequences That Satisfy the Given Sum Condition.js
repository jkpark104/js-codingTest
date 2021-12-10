/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchEndIndex = (nums, start, target) => {
  let end = nums.length;

  let res = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] <= target) [res, start] = [mid, mid + 1];
    else end = mid - 1;
  }

  return res;
};

const numSubseq = (nums, target) => {
  const nthPower = [1];

  for (let i = 0; i <= 1e5; i++)
    nthPower.push((2 * nthPower[nthPower.length - 1]) % (1e9 + 7));

  nums.sort((a, b) => a - b);

  let result = 0;
  for (let start = 0; start < nums.length; start++) {
    if (nums[start] > target) break;

    const end = searchEndIndex(nums, start, target - nums[start]);

    if (start > end || end === -1) continue;

    const n = end - start;

    result = (result + nthPower[n]) % (1e9 + 7);
  }

  return result % (1e9 + 7);
};

console.log(numSubseq([3, 5, 6, 7], 9));
// console.log(
//   numSubseq(
//     [
//       14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16, 9, 7, 14, 11, 14,
//       15, 13, 11, 10, 18, 13, 17, 17, 14, 17, 7, 9, 5, 10, 13, 8, 5, 18, 20, 7,
//       5, 5, 15, 19, 14
//     ],
//     22
//   )
// ); // 272187084;
// console.log(numSubseq([3, 3, 6, 8], 10));
// console.log(numSubseq([2, 3, 3, 4, 6, 7], 12));
// console.log(numSubseq([5, 2, 4, 1, 7, 6, 8], 16));
// console.log(numSubseq([1], 1));
