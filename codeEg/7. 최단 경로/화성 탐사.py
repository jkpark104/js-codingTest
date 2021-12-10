import heapq

def dijkstra():
  q = []
  heapq.heappush(q, (table[0][0], 0, 0))
  
  dx = [1, 0, -1, 0]
  dy = [0, 1, 0, -1]
  while q:
    dist, x, y = heapq.heappop(q)

    if dist > distance[x][y]:
      continue

    for i in range(4):
      nx, ny = x + dx[i], y + dy[i]

      if 0<=nx<n and 0<=ny<n:
        if distance[nx][ny] > distance[x][y] + table[nx][ny]:
          distance[nx][ny] = distance[x][y] + table[nx][ny]
          heapq.heappush(q, (distance[nx][ny], nx, ny))

T = int(input())
for _ in range(T):
  n = int(input())
  table = [list(map(int, input().split())) for _ in range(n)]
  INF = int(1e9)
  distance = [[INF] * n for _ in range(n)]
  distance[0][0] = table[0][0]

  dijkstra()

  print(distance[n-1][n-1])