const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return n > 1;
};

function solution(n, k) {
  let answer = 0;

  for (const num of n.toString(k).match(/[^0]+|[0-9]|[^0]/g)) {
    isPrime(num) ? (answer += 1) : answer;
  }
  return answer;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
