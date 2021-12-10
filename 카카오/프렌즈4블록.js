function rotate(data) {
  const n = data.length;
  const m = data[0].length;
  const res = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[j][i] = data[n - 1 - i][j];
    }
  }
  return res;
}

function downIcon(board) {
  const res = rotate(board);
  const m = board.length;
  let result = res.map(el => el.filter(innerEl => typeof innerEl !== 'number'));

  result = result.map(el => [
    ...el,
    ...Array.from({ length: m - el.length }, () => 0)
  ]);

  return rotate(rotate(rotate(result)));
}

const isTarget = (board, n, m) => {
  let chk = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (
        [board[i + 1][j], board[i][j + 1], board[i + 1][j + 1]].filter(
          el => el === board[i][j]
        ).length === 3 &&
        typeof board[i][j] !== 'number'
      )
        chk = [...chk, [i, j]];
    }
  }
  return chk;
};

function solution(m, n, board) {
  let answer = 0;

  for (let i = 0; i < m; i++) {
    board[i] = board[i].split('');
  }

  let flag = true;
  let pre = 0;

  while (flag) {
    for (const [x, y] of isTarget(board, m, n)) {
      [board[x][y], board[x + 1][y], board[x][y + 1], board[x + 1][y + 1]] = [
        1, 1, 1, 1
      ];
    }

    // console.log(board);
    answer += board.reduce((acc, cur) => {
      acc += cur.filter(el => el === 1).length;
      return acc;
    }, 0);

    board = downIcon(board);
    // console.log(board);
    if (pre === answer) flag = false;
    pre = answer;
  }

  return answer;
}

console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
);
console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']));
