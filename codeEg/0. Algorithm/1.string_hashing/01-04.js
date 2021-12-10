const getCommon = (word, other) => {
  const sumLen = [...new Set(word + other)].length;

  return sumLen === [...word].length + [...other].length
    ? [...word].length * [...other].length
    : 0;
};

const solution = words => {
  let ans = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      ans = Math.max(ans, getCommon(words[i], words[j]));
    }
  }

  return ans;
};

// 겹치지 않는 문자열 return이 아닌 서로 아예 겹치는 게 없어야 함

const inputData = [
  ['kk', 'k', 'kkk', 'kkkkk', 'kkkk'], // 0
  ['skudy', 'kstue', 'time', 'back', 'good'] // 20
];

for (const data of inputData) {
  console.log(solution(data));
}

// function solution(words) {
//   const n = words.length

//   let ans = 0
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       leftLen = words[i].length
//       rightLen = words[j].length
//       sumLen = Array.from(new Set(words[i] + words[j])).length

//       if (sumLen !== leftLen + rightLen) continue

//       ans = Math.max(leftLen * rightLen, ans)
//     }
//   }
//   return ans
// }
