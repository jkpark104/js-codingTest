function covertToSample(str) {
  str = str.toLowerCase();
  return str;
}

function toArray(str) {
  const n = str.length;

  const res = [];
  for (let i = 0; i < n - 1; i++) {
    if (!str.slice(i, i + 2).match(/[^a-z]/g)) res.push(str.slice(i, i + 2));
  }
  return res;
}

function calcJ(str1, str2) {
  const sum = str1.length + str2.length;
  let mux = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) !== -1) {
      str2.splice(str2.indexOf(str1[i]), 1);
      mux += 1;
    }
  }

  return sum - mux === 0 ? 1 : mux / (sum - mux);
}

function solution(str1, str2) {
  let answer = 0;

  str1 = covertToSample(str1);
  str2 = covertToSample(str2);

  str1 = toArray(str1);
  str2 = toArray(str2);

  answer = calcJ(str1, str2);

  return Math.floor(answer * 65536);
}

console.log(solution('FRANCE', 'french'));
console.log(solution('handshake', 'shake hands'));
console.log(solution('E=M*C^2', 'e=m*c^2'));
console.log(solution('aa1+aa2', 'AAAA12'));
