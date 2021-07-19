data = list(map(int, input()))

val = data[0]

for i in range(1, len(data)):
  if val <=1 or data[i] <=1:
    val += data[i]
  else:
    val *= data[i]

print(val)