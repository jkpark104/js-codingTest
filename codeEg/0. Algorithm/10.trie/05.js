class Node {
  constructor() {
    this.end = false;
    this.child = {};
    this.cnt = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let cur = this.root;
    for (const s of word) {
      if (!cur.child[s]) {
        cur.child[s] = new Node();
      }
      cur = cur.child[s];
      cur.cnt += 1;
    }
    cur.end = true;
  }

  getCount(word) {
    let cur = this.root;
    let cnt = 0;
    for (const s of word) {
      cnt += 1;
      cur = cur.child[s];

      if (cur.cnt === 1) return cnt;
    }
    return cnt;
  }
}

const solution = data => {
  const trie = new Trie();

  for (const str of data) trie.insert(str);

  let ans = 0;
  for (const str of data) ans += trie.getCount(str);
  return ans;
};

console.log(solution(['go', 'gone', 'guild']));
