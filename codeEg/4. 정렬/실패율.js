function solution(N, stages) {
  let answer = [];

  for (let stage = 1; stage < N + 1; stage += 1) {
    const clear = stages.filter(x => x >= stage)
    const fail = stages.filter(x => x === stage)

    if (clear.length) {
      answer.push([fail.length / clear.length , stage])
    } else {
      answer.push([0, stage])
    }
  }
  
  return answer.sort((a,b) => (b[0]-a[0]||a[1]-b[1])).map(x => x[1])
}