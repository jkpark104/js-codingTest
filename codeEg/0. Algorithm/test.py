from itertools import combinations
from collections import defaultdict
def solution(orders, course):
    answer = []

    for i in course:
        dic = defaultdict(int)
        for o in orders:
            for c in list(combinations(sorted(list(o)), i)):
                dic[c] += 1
        print(dic)
        dic = sorted(dic.items(), key=lambda x:-x[1])
        for n in range(1, len(dic)):
            if dic[n-1][1] == 1:
                break
            answer.append(''.join(dic[n-1][0]))
            if dic[n-1][1] != dic[n][1]:
                break
    return sorted(answer)

print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))