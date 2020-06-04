// function factorial(n) {
//     if(n === 2) {
//         return 2;
//     }
//     return n*factorial(n-1);
// }

// console.log(factorial(5));

// function factorialLoop(n) {
//     let sum = 1;
//     for(let i = 2; i <= n; i++) {
//         sum = sum * i;
//     }
//     return sum;
// }

// console.log(factorialLoop(5));

// ------------- Fibonacci ------------ //

// function fibonacchiIterative(n) {
//     let arr = [0,1];
//     for(let i= 2; i <= n; i++) {
//         arr.push(arr[i-2] + arr[i-1]);
//     }
//     return arr[i];
// }

// function fibonacciRecursive(n) {
//     if(n < 2) {
//         return n;
//     }
//     return fibonacciRecursive(n-1) + fibonacciRecursive(n-2) 
// }

// console.log(fibonacciRecursive(5));

// function reverseString(str) {
//     if(str === '') {
//       return ''
//     } 
//         return reverseString(str.substr(1))+ str.charAt(0);   
// }

// console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'



// console.log(text.substr(1) + text.charAt(0));



// function sumUp(n) {
//     if(n <= 0) {
//         return 0;
//     }
//     return sumUp(n-1) + n
// }

// console.log(sumUp(3));

// function fibonacci(n) {
//     // if(n < 2) {
//     //     return n
//     // }
//     // return fibonacci(n-2) + fibonacci(n-1);
//     let arr = [0,1]
//     for(let i = 2; i<=n; i++) {
//         arr.push(arr[i-2] + arr[i-1])
//     }   
//     return arr[n]
// }

// console.log(fibonacci(5));

// function sumRange(n, total=0) {
//     if(n <= 0) {
//         return total
//     }
//     return sumRange(n-1, total + n);
// }

// console.log(sumRange(3));

// function factorial(n, sum=1) {
//     if(n <= 0) {
//         return sum
//     }
//     return factorial(n-1, sum*n);
// }

// console.log(factorial(5));
// const text = 'watanabe kota'
// function reverseString(str, result='') {
//     if(str.length <= 0) {
//         return result;
//     }
//     return reverseString(str.substr(1), result=str.charAt(0)+result);
// }

// console.log(reverseString(text));

/// --------- moemoization ---------- ////

// function fibmemo(n, memory=[]) {
//     if(memory[n] != null) {
//         return memory[n]
//     } 
//     let result
//     if(n < 2) {
//         result = n
//     } else {
//         result = fibmemo(n - 1, memory) + fibmemo(n - 2, memory)
//     }
//     memory[n] = result;
   
//     return result;
// }

// console.log(fibmemo(2));

// function twoSums(nums, target) {  
//     let memory = {};  
//     for(let i = 0; i < nums.length; i++) {  
//         const currentNum = nums[i];
//         const needValue = target - currentNum;
//         index2 = memory[needValue];
//         if(index2 != null) {
//             return [index2, i]
//         } else {
//             memory[currentNum] = i
//         }
//     }
// } 

// console.log(twoSums([2,7,9,11],9));


// function longestPrefix(strs) {
//     let longest = '';

//     for(let i = 0; i < strs[0].length; i++) {
//         const char = strs[0][i];

//         for(let j = 0; j < strs.length; j++) {
            
//             if(strs[j][i] !== char) {
//                 return longest;
//             } 
//         }
//         longest += char
//     }
//     return longest;
// }


// console.log(longestPrefix(['flower','flow','flight']));
// console.log(longestPrefix(['dog','racecar','car']));
