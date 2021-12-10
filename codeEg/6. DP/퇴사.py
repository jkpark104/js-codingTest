n = int(input())

days = []
income = []

for _ in range(n):
  a, b = map(int, input().split())
  days.append(a)
  income.append(b)

income.append(0)

dp = income

for i in range(n-1, -1, -1):
  if days[i] + i > n:
    dp[i] = dp[i+1]
  else:
    dp[i] = max(dp[ i+1 ], dp[ i ] + dp[ days[i] + i ])

print(dp[0])