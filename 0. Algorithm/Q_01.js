function solution(words) {
  const sample = new Map()

  for (let str of words[0]) {
    sample.set(str, sample.get(str) + 1 || 1)
  }

  const ans = []
  for (let key of sample.keys()) {
    let cnt = sample.get(key)
    for (let i = 1; i < words.length; i++) {
      cnt = Math.min(cnt, words[i].split('').filter(x => x === key).length)
    }
    for (cnt; cnt > 0; cnt--) ans.push(key)
  }
  return ans
}

console.log(solution(["steasue", "sasseysu", "kseseas"]));
console.log(solution(["ackky", "kabck", "yokkcs"]));