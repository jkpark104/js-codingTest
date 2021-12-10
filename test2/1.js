const solution = (n, primes) => {
  const nums = new Array(1e6 + 1).fill(0);
  nums[1] = 1;
  for (let i = 0; i < primes.length; i++) {
    for (let j = 0; j < primes.length; j++) {
      let tmp = primes[i];

      while (tmp < 1e6 + 1) {
        nums[tmp] = 1;
        tmp *= primes[j];
      }
    }
  }

  let val = 0;
  for (let i = 0; i < 1e6 + 1; i++) {
    if (nums[i]) val += 1;
    if (val === n) return i;
  }
};

console.log(solution(12, [2, 7, 13, 19]));
console.log(solution(1, [2, 3, 5]));
