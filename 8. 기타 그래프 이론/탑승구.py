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

G = int(input()) # 탑승구 수
P = int(input()) # 비행기 수

parent = [i for i in range(G+1)]
ans = 0
for _ in range(P):
  g = find_parent(int(input()))
  
  if not g:
    break
  else:
    union_parent(g, g-1)
    ans += 1

print(ans)