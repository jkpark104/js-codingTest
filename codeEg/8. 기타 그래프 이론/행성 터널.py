def find_parent(x):
  if x != parent[x]:
    parent[x] = find_parent(parent[x])

  return parent[x]

def union_parent(a, b):
  a = find_parent(a)
  b = find_parent(b)

  if a > b:
    parent[a] = b
  else:
    parent[b] = a

n = int(input())
x, y, z = [], [], []
parent = [i for i in range(n+1)]
for i in range(n):
  a, b, c = map(int, input().split())
  x.append([a, i])
  y.append([b, i])
  z.append([c, i])
edges = []
x.sort()
y.sort()
z.sort()
for i in range(n-1):
  edges.append([abs(x[i][0]-x[i+1][0]), x[i][1], x[i+1][1]])
  edges.append([abs(y[i][0]-y[i+1][0]), y[i][1], y[i+1][1]])
  edges.append([abs(z[i][0]-z[i+1][0]), z[i][1], z[i+1][1]])

ans = 0
edges.sort()
for i in range(len(edges)):
  cost, x, y = edges[i]

  if find_parent(x+1) != find_parent(y+1):
    union_parent(x+1, y+1)
    ans += cost
print(ans)