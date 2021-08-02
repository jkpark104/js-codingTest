def rotate(data):
    n = len(data)
    m = len(data[0])
    array = [[0] * n for _ in range(m)]
    for i in range(n):
        for j in range(m):
            array[j][i] = data[n - 1 - i][j]
    return array

def solution(key, lock):
  n = len(key)
  m = len(lock)
  hole = [[i,j] for i in range(m) for j in range(m) if lock[i][j] == 0]
  if (not len(hole)): return True
 
  for _ in range(4):
    key = rotate(key)
    home = [[i,j] for i in range(n) for j in range(n) if key[i][j]]
    
    for x, y in hole:
      for i, j in home:
        dx = -i + x
        dy = -j + y

        match = 0
        cnt = 0
        arrangedHome = [[i+dx,j+dy] for i, j in home]
        for ax, ay in arrangedHome:
          if (0<=ax<m and 0<=ay<m):
            if (lock[ax][ay] == 0):
              cnt += 1
              match += 1
          else:
            cnt += 1
        if match == len(hole) and cnt == len(home):
          return True
  return False

print(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]))