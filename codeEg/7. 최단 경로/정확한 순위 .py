v, e = map(int, input().split())

INF = int(1e9)

graph = [[INF]*(v+1) for _ in range(v+1)]

for i in range(1, v+1):
  graph[i][i] = 0

for _ in range(e):
  a, b = map(int, input().split())
  graph[a][b] = 1

for k in range(1, v+1):
  for a in range(1, v+1):
    for b in range(1, v+1):
      graph[a][b] = min(graph[a][b], graph[a][k]+graph[k][b])

ans = 0

for i in range(1,v+1):
  cnt = True
  for j in range(1, v+1):
    if graph[i][j] == INF and graph[j][i] == INF:
      cnt = False
  if cnt:
    ans += 1

print(ans)