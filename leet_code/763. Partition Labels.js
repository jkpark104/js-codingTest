/**
 * @param {string} s
 * @return {number[]}
 */
const intersect = (s1, s2) =>
  s2.length === [...s2].filter(str => !s1.includes(str)).length;

const partitionLabels = s => {
  const n = s.length;

  const res = [];

  let start = 0;
  for (let end = 1; end <= n; end++) {
    const one = s.slice(end, n);
    const other = s.slice(start, end);
    if (intersect(one, other)) {
      res.push(other.length);
      start = end;
    }
  }
  return res;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
console.log(partitionLabels('eccbbbbdec'));
