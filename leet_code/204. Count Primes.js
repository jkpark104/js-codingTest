const countPrimes = n => {
  if (n < 2) return 0;
  const eratos = new Array(n).fill(1);

  eratos[0] = 0;
  eratos[1] = 0;

  let count = n - 2;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (eratos[i] === 0) continue;
    let j = 2;

    while (i * j < n) {
      if (eratos[i * j]) count -= 1;
      eratos[i * j] = 0;
      j += 1;
    }
  }

  return count;
};

console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(2));
