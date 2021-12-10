// function solution(nums) {
//   const ans = [];

//   for (let num of nums) {
//     let n = 1;
//     let cnt = 0;
//     let digits = 1;
//     while (num - 9 * 10 ** (n - 1) > 0) {
//       num -= 9 * 10 ** (n - 1);
//       cnt += 1;
//       if (cnt === 2) {
//         cnt = 0;
//         n += 1;
//       }
//       digits += 1;
//     }

//     const string =
//       '0'.repeat(Math.ceil(digits / 2) - ('' + num).length) + num || '' + num;
//     const res = [];
//     console.log(digits, num);
//     if (digits === 1) res.push(+string[0]);
//     else if (digits === 2) {
//       res.push(+string[0]);
//       res.unshift(+string[0]);
//     } else {
//       if (digits % 2 === 0) {
//         console.log(string);
//         const number =
//           +string[string.length - 1] - 1 >= 0
//             ? +string[string.length - 1] - 1
//             : 9;
//         res.push(number);
//         res.unshift(number);
//       } else {
//         const number =
//           +string[string.length - 1] - 1 >= 0
//             ? +string[string.length - 1] - 1
//             : 9;
//         res.push(number);
//       }
//       for (let i = string.length - 2; i > -1; i--) {
//         if (i === 0) {
//           res.push(+string[i] + 1);
//           res.unshift(+string[i] + 1);
//         } else {
//           res.push(+string[i]);
//           res.unshift(+string[i]);
//         }
//       }
//     }
//     // console.log(string, res);
//     ans.push(+res.join(''));
//   }
//   return ans;
// }
// const solution = nums =>
//   nums.map(k => {
//     if (k < 10) {
//       return k;
//     }
//     if (k < 19) {
//       return (k - 9) * 11;
//     }
//     const log_k = Math.floor(Math.log10(k - 9));
//     const log_k2 = Math.floor(Math.log10((k + 1) / 2));
//     console.log(log_k, log_k2);
//     if (log_k === log_k2) {
//       const str1 = k - 10 ** log_k + 1 + '';
//       const str2 = str1.split('').reverse().slice(1).join('');
//       return str1 + str2;
//     }
//     const str1 = k - 10 ** log_k + 1 + '';
//     const str2 = str1.split('').reverse().join('');
//     return str1 + str2;
//   });

const getPalindrome = n => {
  const len = Math.floor(n / 2);

  const res = [];
  if (n % 2) {
    for (let i = 10 ** (len - 1); i < 10 ** len; i++) {
      for (let j = 0; j < 10; j++) {
        res.push(+`${i}${j}${i.toString().split('').reverse().join('')}`);
      }
    }
  } else {
    for (let i = 10 ** (len - 1); i < 10 ** len; i++) {
      res.push(+`${i}${i.toString().split('').reverse().join('')}`);
    }
  }

  return res;
};

function solution(nums) {
  const ans = [];
  for (let num of nums) {
    // let res = [];
    let n = 1;
    let cnt = 0;
    let digits = 1;
    while (num - 9 * 10 ** (n - 1) > 0) {
      num -= 9 * 10 ** (n - 1);
      cnt += 1;
      if (cnt === 2) {
        cnt = 0;
        n += 1;
      }
      digits += 1;
    }

    ans.push(getPalindrome(digits)[num - 1]);

    // for (let i = Math.ceil(digits / 2) - 1; i > -1; i--) {
    //   const [quotient, remainder] = [Math.floor(num / 10 ** i), num % 10 ** i];
    //   num %= 10 ** i;
    //   if (i === Math.ceil(digits / 2) - 1)
    //     res = [...res, remainder ? quotient + 1 : quotient];
    //   else res = [...res, remainder ? quotient : quotient ? quotient - 1 : 9];
    // }

    // ans.push(
    //   digits % 2 === 0
    //     ? +(res.join('') + res.reverse().join(''))
    //     : +(res.join('').slice(0, -1) + res.reverse().join(''))
    // );
  }
  return ans;
}

console.log(solution([10, 12, 24, 19, 109, 199])); // [1, 33, 151]
console.log(solution([556737])); // 45673837654
// console.log(solution([126834]));
console.log(solution([49966])); // 399676993
console.log(solution([49977])); // 399787993
console.log(solution([126828])); // 2682992862
console.log(solution([10])); // 11
console.log(solution([576752])); // 47675357674
console.log(solution([916006])); // 81600700618
