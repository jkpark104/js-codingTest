function getValue(arr, relation) {
  const result = [];

  for (const rel of relation) {
    result.push(rel.filter((_, index) => arr.indexOf(index) !== -1));
  }

  const obj = {};

  for (const res of result) {
    obj[res.join('')] = (obj[res.join('')] || 0) + 1;
  }

  return Object.keys(obj).length === relation.length;
}

function isValid(answer, tmp) {
  for (const val of answer) {
    if (val.join('') === [...new Set([...tmp, ...val])].join('')) return false;
  }
  return true;
}

function solution(relation) {
  const n = relation[0].length;
  const tmp = [];
  const chk = new Array(n).fill(0);
  let answer = [];

  function dfs(L, s, len) {
    if (L === len) {
      if (getValue([...tmp], relation)) {
        for (const v of tmp) chk[v] = 1;
        console.log(tmp);
        if (isValid(answer, [...tmp])) answer.push([...tmp]);
      }
    } else {
      for (let i = s; i < n; i++) {
        if (!chk[i]) {
          tmp.push(i);
          dfs(L + 1, i + 1, len);
          tmp.pop();
        }
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    dfs(0, 0, i);
  }

  return answer.length;
}
console.log(
  solution([
    ['100', 'ryan', 1],
    ['200', 'apeach', 2],
    ['300', 'tube', 3],
    ['400', 'tube', 4],
    ['200', 'muzi', 5],
    ['600', 'apeach', 1]
  ])
);
