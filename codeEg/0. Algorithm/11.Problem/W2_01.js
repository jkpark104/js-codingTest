function solution(words) {
  words.sort((a, b) => a.length - b.length);

  const sample = words[0];
  let chunk = '';
  for (let i = 0; i < sample.length; i++) {
    let flag = true;
    for (let j = 1; j < words.length; j++) {
      if (words[j][i] !== sample[i]) flag = false;
    }
    if (!flag) return chunk;
    chunk += sample[i];
  }
  return sample;
}

console.log(solution(['long', 'longtime', 'longest'])); // long
console.log(solution(['abc', 'abd', 'abe'])); // ab
console.log(solution(['abc', 'ab'])); // a
