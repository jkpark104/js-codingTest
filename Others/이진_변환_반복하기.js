function solution(s) {
  const answer = [0, 0];

  while (s !== '1') {
    answer[0] += 1;

    const zero = s.match(/0/g);
    answer[1] += zero ? zero.length : 0;

    s = s.match(/1/g).length.toString(2);
  }

  return answer;
}

console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));
