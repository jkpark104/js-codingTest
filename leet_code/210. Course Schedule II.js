/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const graph = new Array(numCourses).fill().map(() => new Array(0));

  const indegree = new Array(numCourses).fill(0);

  for (const [a, b] of prerequisites) {
    graph[b].push(a);
    indegree[a] += 1;
  }

  const ans = [];

  const q = [];
  for (let i = 0; i < numCourses; i++) if (!indegree[i]) q.push(i);

  while (q.length) {
    const now = q.shift();
    ans.push(now);

    for (const next of graph[now]) {
      indegree[next] -= 1;
      if (!indegree[next]) q.push(next);
    }
  }

  return indegree.reduce((acc, cur) => acc + cur, 0) ? [] : ans;
};

// console.log(findOrder(2, [[1, 0]]));
console.log(
  findOrder(3, [
    [1, 0],
    [1, 2],
    [0, 1]
  ])
);
