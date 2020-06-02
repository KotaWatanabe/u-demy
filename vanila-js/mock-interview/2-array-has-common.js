// function hasCommonValue(arr1, arr2) {
//     let memory = {};

//     for(let j = 0; j < arr1.length; j++) {
//         memory[arr1[j]] = true;
//     }

//     for(let i = 0; i < arr2.length; i++) {
//         if(memory[arr2[i]]) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(hasCommonValue(['a','b','c'], ['d','e','f']));
// console.log(hasCommonValue(['a','b','c'], ['c','e','f']));

// function reverse(str) {
//     return str.split('').reverse().join('')
// } 
// function reverse(str) {
//     const result = [];
//     for(let i = str.length -1; i >= 0; i--) {
//         result.push(str[i]);
//     }
//     return result.join('')
// } 

// console.log(reverse('Hi My name is Andrei'));

// function mergeSortedArrays(arr1, arr2) {   
//     return [...arr1,...arr2].sort((a,b) => a - b);
// }
// function mergeSortedArrays(arr1, arr2) {   
//     let point1 = 0;
//     let point2 = 0;

//     const result = [];

//     while(arr1[point1] || arr2[point2]) {
//         console.log(arr1[point1], arr2[point2]);
        
//         if(!arr1[point1] || arr1[point1] > arr2[point2]) {
//             result.push(arr2[point2]);
//             point2++;
//         } else {
//             result.push(arr1[point1]);
//             point1++;
//         }
//     }
//     return result;
// }



// console.log(mergeSortedArrays([4,6,30],[0,3,4,31]));


function firstRecurNum(arr) {
    let memory = {}
    for(let i = 0; i < arr.length; i++) {
        if(!memory[arr[i]]) {
            memory[arr[i]] = true;
        } else {
            return arr[i];
        }
    }
}

console.log(firstRecurNum([2,5,1,2,3,5,1,2,4])); //2
console.log(firstRecurNum([2,1,1,2,3,5,1,2,4])); //1
console.log(firstRecurNum([2,1,4,3])); //undefined
