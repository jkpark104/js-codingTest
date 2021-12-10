import heapq

n = int(input())

q = []

for _ in range(n):
  heapq.heappush(q, int(input()))

ans = 0
while (len(q) != 1):
  y = heapq.heappop(q)
  x = heapq.heappop(q)
  ans += x + y
  heapq.heappush(q, x + y)

print(ans)