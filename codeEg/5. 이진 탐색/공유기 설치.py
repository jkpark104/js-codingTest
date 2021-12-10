n, c = map(int, input().split())

home = []
ans = 0

for _ in range(n):
  home.append(int(input()))

home.sort()

start = 1
end = home[-1] - home[0]

while start <= end:
  mid = (start + end) // 2

  val = home[0]
  cnt = 1
  for i in range(1, n):
    if home[i] - val >= mid:
      cnt += 1
      val = home[i]

  if cnt >= c:
    start = mid + 1
    ans = mid
  else:
    end = mid - 1

print(ans)