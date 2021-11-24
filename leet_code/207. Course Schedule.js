/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const graph = new Array(numCourses + 1).fill().map(() => new Array(0));

  const indegree = new Array(numCourses).fill(0);

  for (const [a, b] of prerequisites) {
    graph[b].push(a);
    indegree[a] += 1;
  }

  const q = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) q.push(i);
  }

  while (q.length) {
    const now = q.shift();

    for (const next of graph[now]) {
      indegree[next] -= 1;
      if (indegree[next] === 0) q.push(next);
    }
  }

  return !indegree.reduce((acc, cur) => acc + cur, 0);
};

console.log(
  canFinish(8, [
    [1, 2],
    [1, 5],
    [2, 3],
    [2, 6],
    [3, 4],
    [4, 7],
    [5, 6],
    [6, 4]
  ])
);
console.log(canFinish(2, [[1, 0]]));
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1]
  ])
);
