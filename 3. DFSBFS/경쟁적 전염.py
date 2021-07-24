import heapq

def sol(q):
  dx = [1,0,-1,0]
  dy = [0,1,0,-1]
  
  q_next = []
  while q:
    now, x, y = heapq.heappop(q)
    
    for i in range(4):
      nx, ny = x + dx[i], y + dy[i]

      if 0<=nx<n and 0<=ny<n and not data[nx][ny]:
        data[nx][ny] = now
        heapq.heappush(q_next, (now, nx, ny))
  return q_next

q = []
n, k = map(int, input().split())

data = []
for i in range(n):
  tmp = list(map(int, input().split()))
  for j in range(n):
    if tmp[j]:
      heapq.heappush(q, (tmp[j], i, j))
  data.append(tmp)

s, x, y = map(int, input().split())
for _ in range(s):
  q = sol(q)
print(data[x-1][y-1])