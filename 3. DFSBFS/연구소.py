from itertools import combinations
from collections import deque
import copy
import sys
input = lambda : sys.stdin.readline().rstrip()

def solution(data):
  area_copy = copy.deepcopy(area)

  for zx, zy in data:
    area_copy[zx][zy] = 1

  q = deque()
  dx = [1,0,-1,0]
  dy = [0,1,0,-1]
  infected = 0
  for vx, vy in virus:
    q.append([vx,vy])

    while q:
      x, y = q.popleft()

      for i in range(4):
        nx, ny = x + dx[i], y + dy[i]

        if 0<=nx<n and 0<=ny<m:
          if area_copy[nx][ny] == 0:
            area_copy[nx][ny] = 2
            q.append([nx, ny])
            infected += 1

  return safety_zone - infected - 3

n, m = map(int, input().split())

area = [list(map(int, input().split())) for _ in range(n)]

zeros = [[i,j] for i in range(n) for j in range(m) if area[i][j] == 0]
virus = [[i,j] for i in range(n) for j in range(m) if area[i][j] == 2]

safety_zone = len(zeros)

res = []
for data in combinations(zeros, 3):
  res.append(solution(data))

print(max(res))