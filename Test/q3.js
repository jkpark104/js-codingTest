const calcFee = ([min, fee, perM, perF], time) =>
  fee + Math.ceil(Math.max(time - min, 0) / perM) * perF;

const calcTime = (time1, time2) => {
  const [h1, m1] = time1.split(':');
  const [h2, m2] = time2.split(':');

  return +h2 * 60 + +m2 - (+h1 * 60 + +m1);
};

const getTime = array => {
  const n = array.length % 2 ? array.length - 1 : array.length;
  // console.log(array, n);

  let time = 0;
  for (let i = 0; i < n / 2; i++) {
    time += calcTime(array[i * 2], array[i * 2 + 1]);
  }

  if (array.length % 2) time += calcTime(array[array.length - 1], '23:59');

  return time;
};

function solution(fees, records) {
  let answer = [];

  const obj = {};

  for (const record of records) {
    const [time, number] = record.split(' ');
    // console.log(time, number);
    if (obj[number]) obj[number].push(time);
    else obj[number] = [time];
  }
  // console.log(obj);

  for (const value of Object.keys(obj)) {
    obj[value] = getTime(obj[value]);
  }

  const res = Object.entries(obj).sort((a, b) => +a[0] - +b[0]);

  return res.map(el => calcFee(fees, el[1]));
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:58 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT'
    ]
  )
);
