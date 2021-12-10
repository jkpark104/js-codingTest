function solution(cacheSize, cities) {
  let answer = 0;
  let cash = [];
  cities = cities.map(el => el.toLowerCase());

  for (let i = 0; i < cities.length; i++) {
    if (cash.indexOf(cities[i]) === -1) answer += 5;
    else answer += 1;
    cash = cash.filter(el => el !== cities[i]);
    cash = [...(cash.length === cacheSize ? cash.slice(1) : cash), cities[i]];
  }
  return cacheSize === 0 ? cities.length * 5 : answer;
}

console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']));
