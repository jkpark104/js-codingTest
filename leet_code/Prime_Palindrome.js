const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return n !== 1;
};

const getPalindrome = n => {
  const res = [];
  const len = Math.floor(n / 2);
  for (let i = 10 ** (len - 1); i < 10 ** len; i++) {
    for (let j = 0; j < 10; j++) {
      res.push(
        +(i + '' + (n % 2 ? j : '') + i.toString().split('').reverse().join(''))
      );
    }
  }
  return res;
};

let primePalindrome = function (n) {
  const temp = [2, 2, 2, 3, 5, 5, 7, 7, 11, 11, 11, 11];
  if (temp[n]) return temp[n];
  let N = n.toString().length;
  while (1) {
    for (const number of getPalindrome(N)) {
      if (number >= n && isPrime(number)) return number;
    }
    N += 1;
  }
};

// console.log(primePalindrome(13));
// console.log(primePalindrome(6));
// console.log(primePalindrome(8));
// console.log(primePalindrome(1));
console.log(primePalindrome(9989900));
