T = int(input())

for _ in range(T):
  n, m = map(int, input().split())
  data = list(map(int, input().split()))
  goldMine = []
  for i in range(0, n*m, m):
    goldMine.append(data[i:i+m])
  
  dp = [[0] * (m+2) for _ in range(n+2)]
  
  ans = 0
  for i in range(1, m+1):
    for j in range(1, n+1):
      dp[j][i] = goldMine[j-1][i-1] + max(dp[j-1][i-1], dp[j][i-1], dp[j+1][i-1])
      ans = max(ans, dp[j][i])
  
  print(ans)