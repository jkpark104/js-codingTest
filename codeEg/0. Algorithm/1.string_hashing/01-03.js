const solution = s => {
  const res = [];

  for (let i = 0; i < s.length; i++) {
    res.push([...s].slice(i).join(''));
  }

  return res.sort();
};

console.log(solution('kseaedu'));
