/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = S => {
  const n = S.length;

  const tmp = [];

  const ans = [];
  const com = (L, s, sample) => {
    if (+sample[sample.length - 1] > 255) return;
    if (
      sample.length &&
      +sample[sample.length - 1] !== 0 &&
      sample[sample.length - 1][0] === '0'
    )
      return;
    if (
      sample.length &&
      +sample[sample.length - 1] === 0 &&
      sample[sample.length - 1].length > 1
    )
      return;
    if (L === 3) {
      if (+sample[2] > 255) return;
      if (+sample[2] === 0 && sample[2].length > 1) return;
      if (+sample[2] !== 0 && sample[2][0] === '0') return;
      ans.push(sample.join('.'));
    } else {
      for (let i = s; i < n; i++) {
        tmp.push(i);
        if (tmp.length === 1) {
          sample.push(S.slice(0, i));
        } else if (tmp.length === 2) {
          sample.push(S.slice(tmp[0], i));
        } else {
          sample.push(S.slice(tmp[1], i));
          sample.push(S.slice(i, n));
        }

        com(L + 1, i + 1, sample);
        if (tmp.length === 3) sample.pop();
        tmp.pop();
        sample.pop();
      }
    }
  };
  com(0, 1, []);

  return ans;
};

// console.log(restoreIpAddresses('25525511135'));
// console.log(restoreIpAddresses('010010'));
console.log(restoreIpAddresses('00000'));
