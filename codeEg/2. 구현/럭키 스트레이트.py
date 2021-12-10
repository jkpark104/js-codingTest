input_data = '''
123402
7755
'''.strip().split('\n')


for data in input_data:
  data = list(map(int, data))
  n = len(data)
  leftSum = sum(data[:n//2])
  
  if leftSum == sum(data)-leftSum:
    print('LUCKY')
  else:
    print('READY')