from collections import deque

def bfs():
  q = deque()
  q.append(start)
  distance[start] = 0
  
  while q:
    now = q.popleft()

    for next in graph[now]:
      if distance[next] == INF:
        distance[next] = distance[now] + 1
        if distance[next] == target:
          ans.append(next)
        q.append(next)

v, e, target, start = map(int, input().split())
INF = int(1e9)
distance = [INF] * (v+1)
graph = [[] for _ in range(v+1)]

for _ in range(e):
  a, b = map(int, input().split())
  graph[a].append(b)

ans = []
bfs()
ans.sort()
if not len(ans):
  print(-1)
else:
  for i in ans:
    print(i)