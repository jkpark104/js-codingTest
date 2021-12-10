/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const degrees = new Array(numCourses).fill(0);

  const graph = new Array(numCourses + 1).fill().map(() => new Array(0));

  for (const [a, b] of prerequisites) {
    degrees[a] += 1;
    graph[b].push(a);
  }

  const q = [];
  for (let i = 0; i < numCourses; i++) if (degrees[i] === 0) q.push(i);

  const ans = [];
  while (q.length) {
    const now = q.shift();
    ans.push(now);

    for (const next of graph[now]) {
      degrees[next] -= 1;
      if (degrees[next] === 0) q.push(next);
    }
  }

  return degrees.reduce((acc, cur) => acc + cur, 0) === 0 ? ans : [];
};

// console.log(findOrder(2, [[1, 0]]));
console.log(
  findOrder(3, [
    [1, 0],
    [1, 2],
    [0, 1]
  ])
);
