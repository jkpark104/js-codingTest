const ladderLength = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) return 0;

  const sameValueIndex = wordList.indexOf(beginWord);
  if (sameValueIndex !== -1) wordList.splice(sameValueIndex, 1);

  const table = {};
  table[beginWord] = [
    wordList.filter(
      word => [...word].filter((str, i) => str !== beginWord[i]).length === 1
    ),
    0
  ];

  for (const word1 of wordList) {
    table[word1] = [
      wordList.filter(
        word2 => [...word2].filter((str, i) => str !== word1[i]).length === 1
      ),
      0
    ];
  }

  const q = [beginWord];
  table[beginWord][1] = 1;

  while (q.length) {
    const now = q.shift();

    for (const next of table[now][0]) {
      if (table[next][1]) continue;
      table[next][1] = table[now][1] + 1;
      q.push(next);
    }
  }

  return table[endWord][1];
};

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
);

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
console.log(ladderLength('hot', 'dog', ['hot', 'dog']));
