class Node {
  constructor() {
    this.end = false;
    this.child = {}
    this.cnt = 0
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let cur = this.root;
    for (let x of word) {
      if (cur.child[x] === undefined) {
        cur.child[x] = new Node();
      }
      cur = cur.child[x];
      cur.cnt += 1
    }
    cur.end = true;
  }
  getCount(word) {
    let cnt = 0
    let cur = this.root
    for (let x of word) {
      cnt += 1
      cur = cur.child[x]
      if (cur.cnt === 1) return cnt
    }
    return cnt
  }
}

function solution(data) {
  const trie = new Trie()

  for (let i of data) {
    trie.insert(i)
  }

  let ans = 0
  for (let i of data) {
    ans += trie.getCount(i)
  }
  return ans
}

console.log(solution(["go", "gone", "guild"]))