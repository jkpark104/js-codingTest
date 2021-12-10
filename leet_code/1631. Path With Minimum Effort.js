const minimumEffortPath = heights => {
  let n = heights.length;
  let m = heights[0].length;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  let lt = 0;
  let rt = 1000000;
  let answer = Number.MAX_SAFE_INTEGER;

  // 0,0 에서 시작해서 높이 차가 mid보다 작다면 true
  function DFS(mid, x, y, ch) {
    // 마지막 지점에 닿았으면 그만 탐색해
    if (x === n - 1 && y === m - 1) return true;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 범위에 해당한다면
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && ch[nx][ny] === 0) {
        let dh = Math.abs(heights[x][y] - heights[nx][ny]);
        // 높이 차가 정답이 될 범위에 존재한다면 true
        if (dh <= mid) {
          ch[nx][ny] = 1;
          // 탐색 하면서 mid가 정답이 될 수 있는지 확인한다.
          if (DFS(mid, nx, ny, ch)) return true;
        }
      }
    }

    // for문을 전부 돌았는데도 mid가 정답이 되지 못했다면, false
    return false;
  }

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    let ch = Array.from({ length: n }, () => Array(m).fill(0));
    ch[0][0] = 1;

    if (DFS(mid, 0, 0, ch)) {
      rt = mid - 1;
      answer = Math.min(answer, mid);
    } else {
      lt = mid + 1;
    }
  }
  return answer;
};

// const minimumEffortPath = heights => {
//   const n = heights.length;
//   const m = heights[0].length;

//   const chk = new Array(n)
//     .fill()
//     .map(() => new Array(m).fill(Number.MAX_SAFE_INTEGER));

//   const q = [[0, 0]];

//   const dx = [1, 0, -1, 0];
//   const dy = [0, 1, 0, -1];

//   chk[0][0] = 0;

//   while (q.length) {
//     const [x, y] = q.shift();

//     for (let i = 0; i < 4; i++) {
//       const [nx, ny] = [x + dx[i], y + dy[i]];
//       if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
//         const height = Math.max(
//           chk[x][y],
//           Math.abs(heights[nx][ny] - heights[x][y])
//         );

//         if (height < chk[nx][ny]) {
//           chk[nx][ny] = height;
//           q.push([nx, ny]);
//         }
//       }
//     }
//   }

//   return chk[n - 1][m - 1];
// };

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5]
  ])
);
