/**
 * @param {string} target
 * @return {number}
 */
const minFlips = target => {
  let prev = '0';

  let ans = 0;

  for (const str of target) {
    if (prev !== str) {
      ans += 1;
      prev = str;
    }
  }

  return ans;
};

console.log(minFlips('001011101'));
console.log(minFlips('0000'));
console.log(minFlips('101'));
console.log(minFlips('10111'));
