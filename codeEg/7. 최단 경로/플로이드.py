v = int(input())
e = int(input())

INF = int(1e9)
graph = [[INF] * (v+1) for _ in range(v+1)]

for i in range(1, v+1):
  graph[i][i] = 0

for _ in range(e):
  a, b, c = map(int, input().split())
  graph[a][b] = min(graph[a][b], c)

for k in range(1, v+1):
  for a in range(1, v+1):
    for b in range(1, v+1):
      graph[a][b] = min(graph[a][b], graph[a][k]+graph[k][b])

for i in range(1, v+1):
  for j in range(1, v+1):
    res = graph[i][j] if graph[i][j] != INF else 0
    print(res, end=' ')
  print()