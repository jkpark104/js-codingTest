n = list(map(int, input()))

array = [0, 0]

init = None

for i in n:
  if (init != i):
    array[i] += 1
    init = i

print(min(array))