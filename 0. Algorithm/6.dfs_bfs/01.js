function solution(n) {
  const numbStorage = [];

  function dfs(number) {
    if (number <= 1) {
      numbStorage.push(number);
    } else {
      dfs(Math.floor(number / 2));
      numbStorage.push(number % 2);
    }
  }
  dfs(n);
  
  return parseInt(numbStorage.join(''), 10);
}

console.log(solution(11));