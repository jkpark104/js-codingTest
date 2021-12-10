function solution(id_list, report, k) {
  const obj = {};
  for (const id of id_list) {
    obj[id] = 0;
  }

  report = new Set(report);

  for (const value of report) {
    const [person, target] = value.split(' ');
    obj[target] += 1;
  }

  const ans = new Array(id_list.length).fill(0);

  for (const value of report) {
    const [person, target] = value.split(' ');
    const idx = id_list.indexOf(person);

    if (obj[target] >= k) ans[idx] += 1;
  }

  return ans;
}

// console.log(
//   solution(
//     ['muzi', 'frodo', 'apeach', 'neo'],
//     ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
//     2
//   )
// );
console.log(
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
);
