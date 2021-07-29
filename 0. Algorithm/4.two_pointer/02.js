"use strict"



function solution(nums, k) {
  const n = nums.length

  let rt = 0
  let type = 0
  const sH = {}
  const ans = []
  for (let lt = 0; lt < n - k + 1; lt++) {
    while (rt < n && (rt - lt) < k) {
      if (sH[nums[rt]]) {
        sH[nums[rt]] += 1
      } else {
        type += 1
        sH[nums[rt]] = 1
      }
      rt += 1
    }
    ans.push(type)
    sH[nums[lt]] -= 1
    if (!sH[nums[lt]]) type -= 1
  }
  return ans
}

const input_data = [
  [
    [20, 12, 20, 10, 23, 17, 10], 4
  ],
  [
    [1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3
  ],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}

function solution(nums, k) {
  const n = nums.length

  const sH = new Map()
  const ans = []

  for (let i = 0; i < k - 1; i++) {
    sH.set(nums[i], sH.get(nums[i]) + 1 || 1)
  }
  let lt = 0
  for (let rt = k - 1; rt < n; rt++) {
    sH.set(nums[rt], sH.get(nums[rt]) + 1 || 1)
    ans.push(sH.size)
    sH.set(nums[lt], sH.get(nums[lt]) - 1)
    if (!sH.get(nums[lt])) sH.delete(nums[lt])
    lt += 1
  }
  return ans
}
