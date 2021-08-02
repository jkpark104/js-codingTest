n = int(input())
coins = list(map(int, input().split()))
coins.sort()
# 적어도 coin을 모두 더하고 +1을 더한 금액은 만들 수 없음

target = 1

for x in coins:
  if target < x:
    break
  target += x

print(target)