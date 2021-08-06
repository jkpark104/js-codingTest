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
    }5
    for (cnt; cnt > 0; cnt--) ans.push(key)
  }
  return ans
}

console.log(solution(["steasue", "sasseysu", "kseseas"]));
console.log(solution(["ackky", "kabck", "yokkcs"]));

// function solution(words) {
//   let answer = [];
//   let sH = new Map();
//   for (let x of words[0]) {
//     sH.set(x, sH.get(x) + 1 || 1);
//   }
//   for (let i = 1; i < words.length; i++) {
//     let tmp = new Map();
//     for (let x of words[i]) {
//       if (sH.get(x)) {
//         tmp.set(x, tmp.get(x) + 1 || 1);
//         sH.set(x, sH.get(x) - 1)
//       }
//     }
//     sH = tmp;
//   }
//   let str = "";
//   for (let [key, val] of sH) {
//     str += key.repeat(val);
//   }
//   answer = str.split('');
//   return answer;
// }