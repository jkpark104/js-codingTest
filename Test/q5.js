const calc = (one, other, enter, leave) => {
  const [oneEnterIdx, otherEnterIdx] = [
    enter.indexOf(one),
    enter.indexOf(other)
  ];
  const [oneLeaveIdx, otherLeaveIdx] = [
    leave.indexOf(one),
    leave.indexOf(other)
  ];

  const val1 = oneEnterIdx - otherEnterIdx;
  const val2 = oneLeaveIdx - otherLeaveIdx;

  const obj = {};

  if ((val1 < 0 && val2 > 0) || (val1 > 0 && val2 < 0)) {
    obj[[one, other].join(',')] = 1;
  } else {
    for (const idx of leave.slice(0, oneLeaveIdx)) {
      if (
        idx !== -1 &&
        enter.indexOf(idx) > otherEnterIdx &&
        oneEnterIdx < otherEnterIdx
      ) {
        // console.log(one, other);
        obj[[one, other].join(',')] = 1;
      }
    }
    for (const idx of leave.slice(0, otherLeaveIdx)) {
      if (
        idx !== -1 &&
        enter.indexOf(idx) > oneEnterIdx &&
        otherEnterIdx < oneEnterIdx
      ) {
        // console.log(one, other);
        obj[[one, other].join(',')] = 1;
      }
    }
  }
  // console.log(obj);
  return Object.keys(obj).map(el => el.split(','));
};

function solution(enter, leave) {
  const answer = new Array(enter.length).fill(0);
  const n = enter.length;
  const tmp = [];
  const combination = (L, s) => {
    if (L === 2) {
      const [one, other] = [tmp[0] + 1, tmp[1] + 1];
      const res = calc(one, other, enter, leave);

      if (res.length) {
        for (const [a, b] of res) {
          answer[a - 1] += 1;
          answer[b - 1] += 1;
        }
      }
    } else {
      for (let i = s; i < n; i++) {
        tmp.push(i);
        combination(L + 1, i + 1);
        tmp.pop();
      }
    }
  };

  combination(0, 0);

  return answer;
}

console.log(solution([1, 3, 2], [1, 2, 3]));
console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]));
console.log(solution([2, 1, 3], [1, 1, 2]));
console.log(solution([1, 4, 2, 3], [2, 1, 4, 3]));
