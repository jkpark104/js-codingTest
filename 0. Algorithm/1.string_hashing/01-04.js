function solution(words) {
  const n = words.length

  let ans = 0
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      leftLen = words[i].length
      rightLen = words[j].length
      sumLen = Array.from(new Set(words[i] + words[j])).length

      if (sumLen !== leftLen + rightLen) continue

      ans = Math.max(leftLen * rightLen, ans)
    }
  }
  return ans
}
// 겹치지 않는 문자열 return이 아닌 서로 아예 겹치는 게 없어야 함

const input_data = [
  ["kk", "k", "kkk", "kkkkk", "kkkk"],
  ["skudy", "kstue", "time", "back", "good"],
]

for (let data of input_data) {
  console.log(solution(data))
}