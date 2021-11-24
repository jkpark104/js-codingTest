const isValid = (i, j, subString) => {
  let start = i;
  let end = j;
  while (start <= end) {
    if (subString[i] !== subString[j]) return -1;

    start += 1;
    end -= 1;
  }
  return j - i;
};

const longestPalindrome = s => {
  let ans = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      if ((ans.length > isValid(i, j - 1, s), i, j)) ans = s.substring(i, j);
    }
  }
  return ans;
};

console.log(longestPalindrome('babad'));
