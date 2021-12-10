const solution = s => {
  const hash = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  for (const key of Object.keys(hash)) {
    s = s.replace(new RegExp(key, 'gi'), hash[key]);
  }

  return +s;
};

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
