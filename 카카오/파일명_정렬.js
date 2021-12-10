const compare = key => (a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;

function solution(files) {
  let sampling = [];
  for (let i = 0; i < files.length; i++) {
    files[i].replace(/([^0-9]+)([0-9]+)/, (match, left, right) => {
      sampling = [...sampling, [left.toLowerCase(), +right, i, files[i]]];
    });
  }
  sampling.sort((a, b) => compare(0, 0)(a, b) || a[1] - b[1] || a[2] - b[2]);

  return sampling.map(sample => sample[3]);
}

console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat'
  ])
);
