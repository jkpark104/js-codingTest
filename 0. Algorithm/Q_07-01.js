function solution(nums, h) {
  function getTime(mid) {
    let cnt = 0
    for (let num of nums) {
      cnt += Math.ceil(num / mid)
    }
    return cnt
    // 과자를 먹는 시간을 구하는 함수
  }

  function binarySearch(target) {
    let start = 1
    let end = 100000 // 과자 개수의 최댓값

    while (start <= end) {
      let mid = parseInt((start + end) / 2)

      if (getTime(mid) <= target) {
        ans = mid
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  }
  let ans = undefined
  binarySearch(h)
  return ans
}

console.log(solution([29, 12, 24, 5, 19], 6))