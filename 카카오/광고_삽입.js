function getSecond(str) {
  str = str.split(':');
  return str[0] * 3600 + str[1] * 60 + str[2] * 1;
}

const convertToTime = seconds => {
  const hour = Math.floor(seconds / 3600);
  const min = Math.floor((seconds / 60) % 60);
  const second = Math.floor(seconds % 60);

  const format = n => (n < 10 ? '0' + n : n + '');

  return `${format(hour)}:${format(min)}:${format(second)}`;
};

function solution(play_time, adv_time, logs) {
  const time = new Array(getSecond(play_time) + 1).fill(0);

  let timeInterval = [];
  const n = logs.length;

  for (let i = 0; i < n; i++) {
    const sampling = logs[i].split('-');
    timeInterval.push([getSecond(sampling[0]), getSecond(sampling[1])]);
  }

  for (let i = 0; i < n; i++) {
    const [start, end] = timeInterval[i];
    time[start] += 1;
    time[end] -= 1;
  }

  for (let i = 1; i <= getSecond(play_time); i++) {
    time[i] += time[i - 1];
  }

  for (let i = 1; i <= getSecond(play_time); i++) {
    time[i] += time[i - 1];
  }

  let sum = time[getSecond(adv_time)];
  let ans = 0;
  for (
    let start = 0;
    start <= getSecond(play_time) - getSecond(adv_time);
    start++
  ) {
    if (sum < time[start + getSecond(adv_time)] - time[start]) {
      ans = start + 1;
      sum = time[start + getSecond(adv_time)] - time[start];
    }
  }

  return convertToTime(ans);
}
console.log(
  solution('02:03:55', '00:14:15', [
    '01:20:15-01:45:14',
    '00:40:31-01:00:00',
    '00:25:50-00:48:29',
    '01:30:59-01:53:29',
    '01:37:44-02:02:30'
  ])
);
