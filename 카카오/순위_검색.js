function getKey_Value(data, index) {
  const numb = data.pop();

  return [data.filter((_, i) => !index.includes(i)).join(''), +numb];
}

function bisect_left(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return ans;
}

function getAns(hash, value) {
  const [key, v] = value;

  return hash[key].length - bisect_left(hash[key], v);
}

function solution(info, query) {
  const hash = {};
  const tmp = [];

  info = info.map(el => el.split(' '));
  info.sort((a, b) => +a[4] - +b[4]);

  function dfs(L, s, len) {
    if (L === len) {
      console.log(tmp);
      for (const data of info) {
        const [key, value] = getKey_Value([...data], [...tmp]);
        if (hash[key]) hash[key].push(value);
        else hash[key] = [value];
      }
    } else {
      for (let i = s; i < 4; i++) {
        tmp.push(i);
        dfs(L + 1, i + 1, len);
        tmp.pop();
      }
    }
  }

  for (const data of info) {
    const _key = data.slice(0, -1).join('');
    if (hash[_key]) hash[_key].push(+data.slice(-1));
    else hash[_key] = [+data.slice(-1)];
  }

  for (let i = 1; i <= 4; i++) {
    dfs(0, 0, i);
  }

  let answer = [];
  for (const que of query) {
    const numb = +que.match(/[0-9]+/g);
    let string = que.replace(/-|and|[\s]|/g, '');

    const q = string.match(/[a-z]+/g);
    answer.push(getAns(hash, [q ? q[0] : '', numb]));
  }

  return answer;
}

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50'
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150'
    ]
  )
);
