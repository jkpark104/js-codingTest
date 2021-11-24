const countPrimes = function (n) {
  if (n < 2) return 0;
  const arr = new Array(n).fill(1);
  arr[0] = 0;
  arr[1] = 0;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (!arr[i]) continue;
    let numb = 2;
    while (i * numb < n) {
      arr[i * numb] = 0;
      numb += 1;
    }
  }
  return arr;
};

const countPrimeSetBits = (left, right) => {
  const eratos = countPrimes(100001);

  let ans = 0;
  for (let i = left; i <= right; i++) {
    if (eratos[i.toString(2).match(/1/g).length]) ans += 1;
  }
  return ans;
};

const d = countPrimeSetBits(10, 15);
console.log(d);
