/**
 * @param {number[]} arr
 * @return {number}
 */
const longestMountain = arr => {
  const n = arr.length;

  const dist = new Array(n).fill(0);

  let d = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      d += 1;
      dist[i + 1] = d;
    } else {
      d = 0;
    }
  }

  let ans = 0;
  d = 0;
  for (let i = n - 1; i > 0; i--) {
    if (arr[i - 1] > arr[i]) {
      d += 1;
    } else {
      if (dist[i] && d) ans = Math.max(ans, dist[i] + d + 1);
      d = 0;
    }
  }

  return ans;
};

console.log(longestMountain([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]));
console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
console.log(longestMountain([2, 2, 2]));
console.log(longestMountain([3, 4]));
