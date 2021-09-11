// function solution(nums, k) {
//   const n = nums.length

//   const sH = new Map()
//   const ans = []

//   for (let i = 0; i < k - 1; i++) {
//     sH.set(nums[i], sH.get(nums[i]) + 1 || 1)
//   }
//   let lt = 0
//   for (let rt = k - 1; rt < n; rt++) {
//     sH.set(nums[rt], sH.get(nums[rt]) + 1 || 1)
//     ans.push(sH.size)
//     sH.set(nums[lt], sH.get(nums[lt]) - 1)
//     if (!sH.get(nums[lt])) sH.delete(nums[lt])
//     lt += 1
//   }
//   return ans
// }

function solution(nums, k) {
  const hash = {};
  const ans = [];
  let type = 0;
  let end = 0;
  for (let start = 0; start <= nums.length - k; start++) {
    while (end < nums.length && end - start < k) {
      if (!hash[nums[end]]) type += 1;
      hash[nums[end]] = hash[nums[end]] + 1 || 1;
      end += 1;
    }
    ans.push(type);
    hash[nums[start]] -= 1;
    if (!hash[nums[start]]) type -= 1;
  }
  return ans;
}


const inputData = [
  [
    [20, 12, 20, 10, 23, 17, 10], 4
  ],
  [
    [1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3
  ],
]

for (const data of inputData) {
  console.log(solution(data[0], data[1]))
}
