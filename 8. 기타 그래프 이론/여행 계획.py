def find_parent(x):
    if parent[x] != x:
        parent[x] = find_parent(parent[x])
    return parent[x]

def union_parent(a, b):
    a = find_parent(a)
    b = find_parent(b)
    if a > b:
        parent[a] = b
    else:
        parent[b] = a

v, k = map(int, input().split())
parent = [i for i in range(v+1)]
for i in range(v):
  input_data = list(map(int, input().split()))
  for j in range(v):
    if input_data[j]:
      union_parent(i+1, j+1)

town = list(map(int, input().split()))
ans = 'YES'
for i in range(k-1):
  a = town[i]
  b = town[i+1]
  if find_parent(a) != find_parent(b):
    ans = 'NO'
    break

print(ans)