import bisect
def solution(words, queries):
    data = [[] for _ in range(100001)]    
    data_rev = [[] for _ in range(100001)]
    ans = []
    for word in words:
        data[len(word)].append(word)
        data_rev[len(word)].append(word[::-1])

    for i in range(100001):
        data[i].sort()
        data_rev[i].sort()

    for q in queries:
        if q[0] == '?':
            left = bisect.bisect_left(data_rev[len(q)], q.replace('?', 'a')[::-1])
            right = bisect.bisect_right(data_rev[len(q)], q.replace('?', 'z')[::-1])
        else:
            left = bisect.bisect_left(data[len(q)], q.replace('?', 'a'))
            right = bisect.bisect_right(data[len(q)], q.replace('?', 'z'))
        ans.append(right-left)
    return ans
            

print(solution(["frodo", "front", "frost", "frozen", "frame", "kakao"],
["fro??", "????o", "fr???", "fro???", "pro?"]))