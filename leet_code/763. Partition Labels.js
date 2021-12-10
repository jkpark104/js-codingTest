/**
 * @param {string} s
 * @return {number[]}
 */

const intersection = (one, other) =>
  one.length === [...one].filter(el => !other.includes(el)).length;

const partitionLabels = s => {
  const ans = [];

  let start = 0;
  for (let end = 1; end <= s.length; end++) {
    const [left, right] = [s.slice(start, end), s.slice(end)];

    if (intersection(left, right)) {
      ans.push(left.length);
      start = end;
    }
  }

  return ans;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
console.log(partitionLabels('eccbbbbdec'));
