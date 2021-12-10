function solution(msg) {
  let answer = [];

  msg = msg.split('');

  const hash = {};

  for (let i = 0; i < 26; i++) {
    hash[String.fromCharCode(i + 65)] = i + 1; // 숫자 -> Character
  }

  let j = 0;
  let hash_index = 27;
  for (let i = 0; i < msg.length; i++) {
    while (j < msg.length && hash[msg.slice(i, j + 1).join('')]) {
      j += 1;
    }

    if (!hash[msg.slice(i, j + 1).join('')]) {
      hash[msg.slice(i, j + 1).join('')] = hash_index;
      hash_index += 1;
    }
    answer = [...answer, hash[msg.slice(i, j).join('')]];
    i = j - 1;
  }
  return answer;
}

// console.log(solution('KAKAO'));
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
// console.log(solution('ABABABABABABABAB'));
