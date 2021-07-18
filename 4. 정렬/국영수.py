n = int(input())
data = []
for _ in range(n):
  a, b, c, d = input().split()
  b, c, d = map(int, [b, c, d])
  data.append([a,b,c,d])

data.sort(key= lambda x: (-x[1], x[2], -x[3], x[0]))

for i in data:
  print(i[0])