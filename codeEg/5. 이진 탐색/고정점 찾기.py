def solution():
  start = 0
  end = len(data) - 1

  while start <= end:
    mid = (start + end) // 2
    
    if mid == data[mid]:
      return mid
    elif mid < data[mid]:
      end = mid - 1
    else:
      start = mid + 1

  return -1
  
n = int(input())
data = list(map(int, input().split()))

ans = solution()
print(ans)