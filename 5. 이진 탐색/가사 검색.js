'use strict'

class Node {
  constructor() {
    this.end = false
    this.child = {}
    this.lenType = {}
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    let cur = this.root
    let cnt = 0
    const n = word.length
    for (let x of word) {
      if (cur.child[x] === undefined) {
        cur.child[x] = new Node()
      }
      cur = cur.child[x]
      cnt += 1
      if (cur.lenType[n - cnt]) cur.lenType[n - cnt] += 1
      else cur.lenType[n - cnt] = 1
    }
    cur.end = true
  }

  getCount(query) {
    let cur = this.root
    let cnt = query.length
    for (let x of query) {
      if (x === '?') break
      if (cur.child[x]) {
        cur = cur.child[x]
        cnt -= 1
      }
    }
    return cur.lenType[cnt] ? cur.lenType[cnt] : 0
  }
}

function solution(words, queries) {
  const trie_left = new Trie()
  const trie_right = new Trie()
  const ans = []

  for (let word of words) {
    trie_left.insert(word)
    trie_right.insert(word.split('').reverse())
  }
  for (let query of queries) {
    if (query[0] === '?') {
      ans.push(trie_right.getCount(query.split('').reverse().join('')))
    } else {
      ans.push(trie_left.getCount(query))
    }
  }
  return ans
}

// console.log(solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], ["fro??", "????o", "fr???", "fro???", "pro?"]))
console.log(solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], ["ka???"]))