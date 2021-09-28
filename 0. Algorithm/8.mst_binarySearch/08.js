function solution(n, edges, s, e) {
  const graph = Array.from(
    {
      length: n + 1
    },
    () => []
  );
  for (const [a, b, c] of edges) {
    graph[a].push([b, c]);
  }

  function spreadToTarget(mid) {
    const chk = Array.from(
      {
        length: n + 1
      },
      () => 0
    );

    const q = [s];
    chk[s] = 1;
    while (q.length) {
      const now = q.shift();

      for (const [next, cost] of graph[now]) {
        if (chk[next] === 0 && cost >= mid) {
          chk[next] = 1;
          q.push(next);
        }
      }
    }
    return chk[e];
  }

  let start = 0;
  let end = 1e9;

  let ans = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (spreadToTarget(mid)) {
      ans = mid;
      start = mid + 1;
    } else end = mid - 1;
  }
  return ans;
}

console.log(
  solution(
    5,
    [
      [1, 2, 5],
      [1, 3, 3],
      [1, 4, 2],
      [2, 4, 2],
      [3, 4, 4],
      [4, 5, 3]
    ],
    1,
    5
  )
);

// function solution(n, edges, s, e) {
//   function isValid(mid) {
//     const q = [s]
//     const chk = new Array(n + 1).fill(0)
//     chk[s] = 1
//     while (q.length) {
//       const now = q.shift()

//       for (let [next, weight] of graph[now]) {
//         if (!chk[next] && mid <= weight) {
//           chk[next] = 1
//           q.push(next)
//         }
//       }
//     }
//     return chk[e]
//   }

//   function binarySearch() {
//     let start = 1
//     let end = 1e9
//     let ans = undefined
//     while (start <= end) {
//       let mid = parseInt((start + end) / 2)

//       if (isValid(mid)) {
//         ans = mid
//         start = mid + 1
//       } else {
//         end = mid - 1
//       }
//     }
//     return ans
//   }
//   const graph = new Array(n + 1).fill().map(() => new Array)
//   for (let [x, y, cost] of edges) {
//     graph[x].push([y, cost])
//   }
//   return binarySearch()
// }
