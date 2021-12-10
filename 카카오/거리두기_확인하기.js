const isValid = (arr, person) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (person.length) {
    const [ix, iy] = person.pop();

    const q = [[ix, iy]];
    const chk = new Array(5).fill().map(() => new Array(5).fill(0));
    chk[ix][iy] = 1;

    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
          if (chk[x][y] <= 2 && arr[nx][ny] === 'P' && nx !== ix) {
            return 0;
          }
        }

        if (
          nx >= 0 &&
          nx < 5 &&
          ny >= 0 &&
          ny < 5 &&
          chk[nx][ny] === 0 &&
          arr[nx][ny] === 'O'
        ) {
          chk[nx][ny] = chk[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }
  return 1;
};

const getPos = arr => {
  const person = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] === 'P') {
        person.push([i, j]);
      }
    }
  }
  return person;
};

const solution = places => {
  let answer = [];

  places = places.map(place => place.map(el => el.split('')));

  for (const place of places) {
    answer.push(isValid(place, getPos(place)));
  }

  return answer;
};

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP']
  ])
);
