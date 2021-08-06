// 1. 순서가 유지 돼야 하므로 가장 작은 수를 무조건 앞으로 몰 수 없음 -> k번 지워서 가장 작은 값

function solution(num, k) {
  num = num.toString().split('')
  const n = num.length
  let stack = []

  let i = k // 작은 수를 앞으로 밀 수 있는 횟수
  for (let str of num) {
    while (stack.length && i > 0 && Number(stack[stack.length - 1]) > Number(str)) {
      // 앞자리 수가 뒷자리 수 보다 크면 i(=k)번 한도 내에서 지울 수 있음
      stack.pop()
      i -= 1
    }
    stack.push(str)
  }
  stack = stack.slice(0, n - k)
  // 최종적으로 n-k 자릿수의 숫자가 나와야하고 123과 같이 이미 오름차순으로 정렬 돼 있는 숫자는 뒤에서 부터 n-k자리까지 자르면 됨 

  return Number(stack.join('')) // Number 형태로 변환하면서 앞자리 0 지우고 return
}

console.log(solution(2322113, 3))
console.log(solution(200200, 1))
console.log(solution(123, 3))