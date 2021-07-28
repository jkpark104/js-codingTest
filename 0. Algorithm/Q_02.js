"use strict"


// function solution(words) {
//   const n = words.length
//   const array = []
//   let ans = 0

//   let heightUp = 0
// 	// 증가 상태 개수
//   let heightDn = 0
//   // 감소 상태 개수
//   for (let i = 0; i < n - 1; i++) {
//     if (words[i + 1] - words[i] > 0) {
// 		// 1. 증가하는 구간을 만났을 때
//       if (!heightDn) heightUp += 1
// 			// 1-1.감소 상태 개수가 0일 때(처음 증가하는 상태를 만날 때) 증가 상태 개수 + 1 
//       else {
// 			// 1-2. 감소 상태 개수가 0이 아닐 때 (즉, 바이토닉 연속 부분수열의 끝 점을 만났을 때) 
//         ans = Math.max(heightUp + heightDn + 1)
//         heightUp = 1
//         // 1-2-1. 바이토닉 수열이 끝남과 동시에 다시 증가하므로 Up 개수 1로 초기화
//         heightDn = 0
//       }
//     } else if (words[i + 1] - words[i] < 0) {
// 		// 2. 감소하는 구간을 만났을 때
//       if (heightUp) heightDn += 1
// 			// 2-1. 증가 상태 개수가 0이 아닐 때 (즉, 바이토닉 수열일 때) 감소 상태 개수 + 1
//       else continue
// 			// 2-2. 증가 상태 개수 0일 때 (감소부터 시작하는 구간이므로 바이토닉 수열 아님) Continue
//     } else {
// 		// 3. `0`인 구간 만날 때
//       if (heightUp && heightDn) ans = Math.max(heightUp + heightDn + 1)
// 			// Up 개수가 1이상 Dn 개수가 1이상 (즉, 바이토닉 수열일 때 개수 더해서 전체 길이 구함)
//       heightUp = 0
//       heightDn = 0
//     }
//   }
//   if (heightUp && heightDn) ans = Math.max(heightUp + heightDn + 1)
// 	// for문이 끝났을 때 바이토닉 수열 유무 확인
// 	// Up 개수가 1이상 Dn 개수가 1이상 (즉, 바이토닉 수열일 때 개수 더해서 전체 길이 구함)
//   return ans
// }

// console.log(solution([7, 4, 8])); //0
console.log(solution([2, 1, 4, 7, 3, 2, 5])); //5
// console.log(solution([1, 2, 1, 2, 3, 4, 5])); //3
// console.log(solution([10, 10, 9, 2, 1, 5, 5])); //0
// console.log(solution([1, 2, 3, 4, 2, 5, 7, 4, 3, 2, 1, 3])); //7
// console.log(solution([1, 1, 1, 1, 1])); //0
// console.log(solution([5, 4, 3, 2, 1])); //0
// console.log(solution([10, 10, 9, 2, 1, 5, 4])); //3
// console.log(solution([2, 2, 9, 9, 1, 5, 5])); //0
// console.log(solution([10, 8, 9, 2, 2, 2, 2])); //3
// console.log(solution([3, 2, 5, 6, 4, 3, 7])); //5
// console.log(solution([3, 3, 3])); //0
// console.log(solution('1 2 3 4 5 2 1'.split(' ').map(Number))); //7

function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dist = Array.from({
    length: n
  }, () => 0);
  let ch = Array.from({
    length: n
  }, () => 0);
  ch[0] = 1;
  let d = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] < arr[i]) {
      d++;
      dist[i] = d;
    } else {
      d = 1;
      ch[i] = 1;
    }
  }
  d = 1;
  ch[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      d++;
      dist[i] += d;
    } else {
      d = 1;
      ch[i] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (ch[i] === 0 && dist[i] - 1 > answer) {
      answer = dist[i] - 1;
    }
  }
  return answer;
}