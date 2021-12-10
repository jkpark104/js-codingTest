const isPrime = number => {
  for (let i = 2; i < Math.sqrt(number) + 1; i++) {
    if (number % i === 0) return false;
  }

  return number >= 2;
};

const getPalindrome = len => {
  const res = [];

  for (
    let start = 10 ** (Math.floor(len / 2) - 1);
    start < 10 ** Math.floor(len / 2);
    start++
  ) {
    for (let middle = 0; middle < 10; middle++) {
      const sideLetter = start.toString();
      const middleLetter = len % 2 ? middle.toString() : '';
      res.push(
        sideLetter + middleLetter + sideLetter.split('').reverse().join('')
      );
    }
  }

  return res;
};

const primePalindrome = n => {
  const palindrome = [2, 2, 2, 3, 5, 5, 7, 7, 11, 11, 11, 11];

  if (n <= 11) return palindrome[n];

  let len = n.toString().length;

  while (len < 1e8) {
    for (const number of getPalindrome(len)) {
      if (number >= n && isPrime(number)) return number;
    }

    len += 1;
  }
};

console.log(primePalindrome(102));
console.log(primePalindrome(13));
console.log(primePalindrome(6));
console.log(primePalindrome(8));
console.log(primePalindrome(1));
console.log(primePalindrome(9989900));
