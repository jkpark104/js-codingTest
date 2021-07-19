data = input()

num = 0
res = []
for i in data:
  if i.isdigit():
    num += int(i)
  else:
    res.append(i)

res.sort()

print(''.join(res)+str(num))