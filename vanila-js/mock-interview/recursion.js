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

const text = 'watanabe kota'

console.log(text.substr(1) + text.charAt(0));
console.log(text.substr(1) + text.charAt(0));
console.log(text.substr(1) + text.charAt(0));


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
