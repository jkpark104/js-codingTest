function solution(words) {
  const hash = {};
  for (const str of words[0]) hash[str] = hash[str] + 1 || 1;

  let ans = '';
  for (const key of Object.keys(hash)) {
    let cnt = hash[key];
    for (let i = 1; i < words.length; i++) {
      cnt = Math.min(cnt, words[i].split('').filter(el => el === key).length);
    }
    ans += key.repeat(cnt);
  }
  return ans.split('');
}

console.log(solution(['steasue', 'sasseysu', 'kseseas']));
console.log(solution(['ackky', 'kabck', 'yokkcs']));

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
