import bisect
n, x = map(int, input().split())
data = list(map(int, input().split()))

left_idx = bisect.bisect_left(data, x)
right_idx = bisect.bisect_right(data, x)

res = right_idx-left_idx
if not res:
    print(-1)
else:
    print(res)