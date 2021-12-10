const solution = (n, k) => {
  const princes = new Array(n).fill().map((_, i) => i + 1);

  let number = 0;

  while (princes.length !== 1) {
    number += 1;
    const prince = princes.shift();

    if (number === k) number = 0;
    else princes.push(prince);
  }

  return princes[0];
};

const inputData = [[8, 3]];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
