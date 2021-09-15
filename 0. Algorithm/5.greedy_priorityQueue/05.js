// function solution(nums, m) {
//   nums = nums.sort((a, b) => a - b)

//   let start = 0
//   let end = nums.length - 1
//   for (m; m > 0; m--) {
//     while (0 < end && nums[end - 1] > nums[end]) end -= 1
//     while (start < nums.length - 1 && nums[start] > nums[start + 1]) start += 1
//     if (end === 0 && start === nums.length - 1) return 0
//     nums[end] -= 1
//     nums[start] += 1
//   }
//   console.log(nums, start, end)
//   return nums[end] - nums[start]
// }





function solution(nums, m) {
  const chk = new Array(1001).fill(0);

  let maxValue = Number.MIN_SAFE_INTEGER;
  let minValue = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    chk[num] += 1;
    maxValue = Math.max(maxValue, num);
    minValue = Math.min(minValue, num);
  }
  
  if (minValue === maxValue) return 0;
  
}

console.log(solution([1, 2, 3, 4, 5, 6], 8))
console.log(solution([2, 1, 3, 7, 5], 2))
console.log(solution([2, 2, 2, 2], 2))

// function solution(nums, m){
//   let answer=0;
//   nums.sort((a, b)=>a-b);
//   for(let i=0; i<m; i++){
//       nums[0]++;
//       nums[nums.length-1]--;
//       nums.sort((a, b)=>a-b);
//       if(nums[0]===nums[nums.length-1]) break;
//   }
//   answer=nums[nums.length-1]-nums[0];
//   return answer;
// }
// console.log(solution([2, 1, 3, 7, 5], 2));

// <개선된 코드>
// function solution(nums, m){
//   let answer=0;
//   let ch=Array.from({length:1001}, ()=>0);
//   let maxH=Number.MIN_SAFE_INTEGER;
//   let minH=Number.MAX_SAFE_INTEGER;
//   for(let x of nums){
//       ch[x]+=1;
//       if(x>maxH) maxH=x;
//       if(x<minH) minH=x;
//   }
//   for(let i=1; i<=m; i++){
//       if(maxH===minH) return 0;
//       if(ch[maxH]===1){
//           ch[maxH]--;
//           maxH--;
//           ch[maxH]++;
//       }
//       else{
//           ch[maxH]--;
//           ch[maxH-1]++;
//       }
//       if(ch[minH]===1){
//           ch[minH]--;
//           minH++;
//           ch[minH]++;
//       }
//       else{
//           ch[minH]--;
//           ch[minH+1]++;
//       }
//   }
//   answer=maxH-minH;
//   return answer;
// }
// console.log(solution([2, 1, 3, 7, 5], 2));