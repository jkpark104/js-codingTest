function solution(apples, power, m) {
  const n = apples.length
  // 사과개수

  let app = 0
  for (let i = 0; i < n; i++) {
    if (power[i]) app += apples[i]
  }
  // 부스트를 안 써도 먹을 수 있는 사과 카운트

  let ans = app
  let end = 0
  for (let start = 0; start < n; start++) {
    while (end < n && (end - start) < m) {
      if (!power[end]) app += apples[end]
      end += 1
    }
    ans = Math.max(app, ans)
    if (!power[start]) app -= apples[start]
  }
  return ans
  // 투 포인터를 밀면서 부스트 길이 m 만큼 양쪽 인덱스 이동하면서 최댓값을 구함
}


console.log(solution([5, 2, 3, 2, 1, 3], [0, 0, 0, 1, 0, 0], 3)); //12
console.log(solution([3, 2, 3, 2, 1, 7], [1, 0, 0, 1, 0, 0], 4)); //16
console.log(solution([5, 2, 1, 1, 1, 5], [1, 0, 0, 1, 0, 0], 3)); //12
console.log(solution([3, 2, 3, 2, 1, 7], [1, 0, 0, 1, 0, 0], 4)); //16
console.log(solution([3, 2, 3, 2, 1, 3], [1, 0, 0, 1, 0, 0], 3)); //10
console.log(solution([3, 2, 3, 2, 1, 3], [0, 0, 0, 1, 1, 1], 3)); //14
console.log(solution([1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0], 3)); //3
console.log(solution([1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], 3)); //6
console.log(solution([9, 2, 3, 20, 10, 30], [0, 0, 0, 1, 1, 0], 3)); //60
console.log(solution([3, 2, 3, 2, 1, 3, 3, 6, 7], [1, 0, 0, 1, 0, 0, 0, 0, 0], 5)); //25
