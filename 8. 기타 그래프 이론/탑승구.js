input_data = `
2
2
3
3
4
4
`.trim().split('\n')

const [G, P] = [4, 6] // 탑승구 수, 비행기 수
const parent = new Array(G+1).fill().map((val, idx) => idx)
let ans = 0
for (let data of input_data) {
  g = find_parent(parseInt(data))
  
  if (g === 0) {
    break
  } else {
    union_parent(g, g-1)
    ans += 1
  }
}
console.log(ans)


function find_parent(x) {
  if (x != parent[x]) {
    parent[x] = find_parent(parent[x])
  }
  return parent[x]
}

function union_parent(a, b) {
  a = find_parent(a)
  b = find_parent(b)
  if (a > b) {
    parent[a] = b
  } else {
    parent[b] = a
  }
}