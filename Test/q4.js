function solution(times, k) {
  // if (times.reduce((acc, cur) => acc + cur, 0) <= k) return -1;

  let newTimes = [];
  for (let i = 0; i < times.length; i++) {
    newTimes.push([times[i], i]);
  }

  newTimes.sort((a, b) => b[0] - a[0]);
  let n = newTimes.length;

  let time = 0;
  // console.log(k, newTimes);

  while (k - n * (newTimes[newTimes.length - 1][0] - time) >= 0) {
    const nextTime = newTimes.pop()[0] - time;
    while (newTimes[newTimes.length - 1][0] - time === 0) newTimes.pop();
    k -= n * nextTime;
    // console.log(k, newTimes, nextTime);
    time = nextTime;
    n = newTimes.length;
  }
  // console.log(k, newTimes);

  if (k === 0) return newTimes[newTimes.length - 1][1] + 1;
  return newTimes[newTimes.length - 1 - (k % newTimes.length)][1] + 1;
}

// console.log(solution([1, 2, 3], 5));
// console.log(solution([1, 2, 3, 4], 8));
// console.log(solution([1, 2, 240, 2000], 300));
// console.log(solution([3, 5, 7, 9, 11, 12], 30));
console.log(solution([2, 2, 3, 4, 5, 30, 23, 22, 21], 30));
