def solution(N, stages):
    answer = []
    array = []
    
    n = len(stages)
    for i in range(1, N+1):
      clear = len([x for x in stages if x >= i])
      if clear > 0:
        res = len([x for x in stages if x == i]) / clear
      else:
        res = 0
      array.append([res, i])
    
    for i in sorted(array, key = lambda x: (-x[0], x[1])):
      answer.append(i[1])
    return answer

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])