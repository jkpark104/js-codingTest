const solution = words => {
  words.sort((a, b) => b.length - a.length);

  const n = words[0].length;

  for (let i = 1; i < n + 1; i++) {
    const chunk = words[0].substring(0, i);

    let check = false;

    for (let j = 1; j < words.length; j++) {
      if (words[j].substring(0, i).includes(chunk)) check = true;
    }

    if (!check) return chunk.length;
  }

  return words[0].length;
};

// function solution(words) {
//   words.sort((a, b) => b.length - a.length);
//   const n = words[0].length;

//   let ans = 0;
//   for (let j = 0; j < n; j++) {
//     const chunk = words[0].substring(0, j + 1);
//     let flag = false;
//     for (let i = 1; i < words.length; i++) {
//       if (chunk === words[i].substring(0, j + 1)) {
//         flag = true;
//         break;
//       }
//     }
//     ans += 1;
//     if (!flag) return ans;
//   }
// }

const input_data = [
  ['seeasue', 'sesseysu', 'semeas'],
  ['ackky', 'kabck', 'yokkcs'],
  ['longlong', 'longtong', 'longbig'],
  ['ab', 'abc'],
  ['aa', 'aaab', 'aaac']
];

for (let data of input_data) {
  console.log(solution(data));
}
