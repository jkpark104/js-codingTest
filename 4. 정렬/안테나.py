n = int(input())
data = list(map(int, input().split()))
data.sort()
l = len(data)-1

print(data[l//2])