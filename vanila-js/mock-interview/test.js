// console.log(myObj.print());
// function areValuesArrays (arr)  {
//     for(let i = 0; i < arr.length; i++) {
//         if(!Array.isArray(arr[i])) {
//             return false
//         }        
//     }
//     return true;
// }
// console.log(areValuesArrays([1, [2], [4, 5]]));

// let str = 'i love javaScript';

// 'tpirSavaj evol i'

// const reverse = (str) => str.split('').reverse().join('')

// const reverseWord = str => str.split(' ').reverse().join(' ')

// console.log(reverseWord(str));



// const occurenceOf = function(char,str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === char) count++
//     }
//     return count;
// }

// console.log(occurenceOf(" ", "hello world"));

// const array = [1,2,3,4]

// function totalMinMax(array) {
//     const min = Math.min(...array);
//     const max = Math.max(...array);
//     const totalMax = array.filter(num => num !== min).reduce((acc,item) => acc+item);
//     const totalMin = array.filter(num => num !== max).reduce((acc,item) => acc+item);

//     return JSON.stringify({totalMax, totalMin});
// }

// console.log(totalMinMax(array));

// let x = [1,2,2,4,2,4];

// function maxCount(arr) {
//     let count = 0;
//     const max = Math.max(...arr);
//     return arr.filter(num => num === max).length
// }

// // console.log(maxCount(x));

// let time = '04:03AM';

// function timeModify(time) {
//     if(time.includes('PM')) {
//         let hour = parseInt(time[1]);
//         hour = 12 + hour;

//         const removedTime = time.slice(2,-2)
//         return String(hour) + removedTime;
//     } else {
//         return time.slice(0, -2);
//     }
// }

// console.log(timeModify(time));

// let x = {
//     a() {
//         return this;
//     },
//     b() {
//         return this;
//     }
// }

// console.log(x.a().b().a().a());


//  Greatest common diviser of two numbers

// function findGreatestDiviser(num1,num2) {
//     if(num2 % num1 === 0) {
//         return num1
//     }

//     let greatestDiv = 1;
//     let temp = num1 / 2;

//     for(let i = temp; i > 0; i--) {
//         if(num1 % i === 0 && num2 % i === 0) {
//             return i;
//         }
//     }
//     return greatestDiv;
// }

// console.log(findGreatestDiviser(10,108));

// function getLastKid(kids,toys,start) {
//     if(toys % kids === 0) {
//         return kids + (start-1)
//     }
//     if(kids < toys) {
//         return (toys % kids) + (start-1);
//     } 
//     return toys + (start-1)
// }

// console.log(getLastKid(7,3,1));

// const profile = {
//     age:56,
//     kids:[{
//         age:23,
//         kids:[{
//             age:1
//         }, {
//             age:2
//         }]
//     }]
// }

// function getTotalAge(profile) {
//     let total = 0;
//     total += profile.age;

//     firstGenKids = profile.kids;
//     console.log(firstGenKids);
    

//     firstGenKids.forEach(kid => {
//         total += kid.age;
//     })

//     secondGenKids = profile.kids.kids;
//     console.log(secondGenKids);
    

//     // secondGenKids.forEach(kid => {
//     //     total += kid.age;
//     // })
//     return total;
// }

// console.log(getTotalAge(profile));

// function isPalindrom(str) {
//     return str === str.split('').reverse().join('')
// }

// console.log(isPalindrom('racecar'));
// console.log(isPalindrom('racecarr'));

// function charOccur(c, str) {
//     let memory = {};
//     for(let i = 0; i < str.length; i++) {
//         if(memory[str[i]]) {
//             memory[str[i]] += 1;
//         } else {
//             memory[str[i]] = 1;
//         }
//     }
//     return memory[c];
// }

// console.log(charOccur('b','kota watanabe'));

// function findDuplicate(nums) {
//     const resultStock = [];
//     let memory = {};
//     for(let i = 0; i < nums.length; i++) {
//         if(memory[nums[i]]) {
//             resultStock.push(nums[i]);
//         } else {
//             memory[nums[i]] = true; 
//         }
//     }
//     return resultStock;
// }
// function findDuplicate(nums) {
//     const sortedArr = nums.sort((a,b) => a-b);
//     for(let i = 0; i < nums.length; i++) {
//         if(sortedArr[i] === sortedArr[i+1]) {
//             return sortedArr[i];
//         }
//     }
// }

// console.log(findDuplicate([1,4,3,4,5,9,7,8,9,6]));

// remove duplicates

// const arr = [1,1,3,4,5,6,5,6,7]

// const uniqueArr = [...new Set(arr)];

// console.log(uniqueArr);

// function removeDuplicate(arr) {
//     let memory = {}
//     for(let i = 0; i < arr.length; i++) {
//         if(memory[arr[i]]) {
//             arr.splice(i,1);
//         } else {
//             memory[arr[i]] = true;
//         }
//     }
//     return arr;
// }

// function removeDuplicate(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index)
// }

// console.log(removeDuplicate([1,2,5,3,2,1,5,3]));


/**
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is a number representing how many units there are.

`batches(recipe, available)`
*/

// function batches(recipe,available) {
//     let tempStock = [];
//     for(let ingredient in recipe) {
//         if(!available[ingredient]) {
//             return 0;
//         }

//         tempStock.push(Math.floor(available[ingredient] /recipe[ingredient]));
//     }
//     if(tempStock.includes(0)) {
//         return 0;
//     }
//     return Math.min(...tempStock);
// }

// // 0 batches can be made
// batches(
//     { milk: 100, butter: 50, flour: 5 },
//     { milk: 132, butter: 48, flour: 51 }
//   )
//   batches(
//     { milk: 100, flour: 4, sugar: 10, butter: 5 },
//     { milk: 1288, flour: 9, sugar: 95 }
//   )
  
//   // 1 batch can be made
//   batches(
//     { milk: 100, butter: 50, cheese: 10 },
//     { milk: 198, butter: 52, cheese: 10 }
//   )
  
//   // 2 batches can be made
//   batches(
//     { milk: 2, sugar: 40, butter: 20 },
//     { milk: 5, sugar: 120, butter: 500 }
//   )


// function maskString(str) {
//     const lastFour = str.slice(-4);
//     let temp = ''
    
//     for(let i = 0; i < str.length - 4; i++) {
//         temp += '#'
//     }
//     return temp+lastFour;
// }

// console.log(maskString("123456789"));

// function commonChar(s1, s2) {
//     let memory = {};
//     for(let i = 0; i < s1.length; i++) {
//         if(memory[s1[i]]) {
//             memory[s1[i]] ++;
//         }
//         if(s2.includes(s1[i])) {
//             memory[s1[i]] = 1;
//         }
//     }
//     return memory
// }

// console.log(commonChar('ABAZD','BACBAD')); // ABAD
// console.log(commonChar('AGGTAB', 'GXTXAYB')); // GTAB

// (function add() {
//     let counter = 0;
//     return function() {
//         counter += 1; 
//         return counter
//     }
// })();

// console.log(add());

// let val1 = 2
// function multiplyThis(n) {
//   let ret = n * val1
//   return ret
// }
// let multiplied = multiplyThis(6)
// console.log('example of scope:', multiplied)

// function createCounter() {
//    let counter = 0
//    const myFunction = () => {
//      counter = counter + 1
//      return counter
//    }
//    return myFunction
//  }

//  const temp = createCounter();
//  console.log(temp());
//  console.log(temp());
//  console.log(temp());
 
// function createCounter() {
//    let counter = 0
//    const myFunction = function() {
//      counter = counter + 1
//      return counter
//    }
//    return myFunction
//  }
//  const increment = createCounter()
//     const c1 = increment()
//     const c2 = increment()
//     const c3 = increment()
//     console.log('example increment', c1, c2, c3)

// function createCounter() {
//    let counter = 0
//    const myFunction = function() {
//      counter = counter + 1
//      return counter
//    }
//    return myFunction
//  }
//  const increment = createCounter()
//     const c1 = increment()
//     const c2 = increment()
//     const c3 = increment()
//     console.log('example increment', c1, c2, c3)


// function tripletNum(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         let memory = {};
//         let neededNum = target - nums[i];
//         for(let j = i + 1; j < nums.length; j++){
//             if(memory[neededNum - nums[j]]) {
//                 return [nums[i], nums[j],neededNum - nums[j]]
//             }
//             memory[nums[j]] = true;
//         }         
//     }
//     return [];
// }
  
// console.log(tripletNum([1, 2, 5, -2, 0, 10, 5, 3, 4],12));

// function drawLine(num) {
//     let result = ''
//     for(let i = 0; i < num; i++) {
//         result += '-' +'\n' ;
//     }
//     console.log(result);
    
    
// }

// drawLine(8)
// console.log('test');


// const example = 'kota watanabe'
// const logestLength = example.length;

// console.log(logestLength);

// console.log(logestLength);

// console.log(addTwo(logestLength));
// console.log(addTwo(10));
// console.log(addTwo(7));
// console.log(addTwo(8));

// function wordCounts(str) {
//     let countObject = {};
//     const strArr = str.split(' ');
//     for(let i = 0; i < strArr.length; i++) {
//         if(!countObject[strArr[i]]) {
//             countObject[strArr[i]] = 1;
//         } else {
//             countObject[strArr[i]] += 1;
//         }
//     }
//     return countObject;
// }

// console.log(wordCounts('this is this and that'));

// function twoSum(nums,target) {
//     let memory = {};
//     for(let i = 0; i < nums.length; i++) {
//         const neededNum = target-nums[i]
//         if(memory[neededNum] !== undefined && memory[neededNum] !== i) {
//             return [memory[neededNum],i]
//         } else {
//             memory[nums[i]] = i;
//         }
//         console.log(i, neededNum, memory);
//     }

    
//     return [];
// }
function threeSum(nums,target) {
    for(let i = 0; i < nums.length; i++) {
        let memory = {};
        const neededNum = target - nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            const lastPiece = neededNum - nums[j]
            if(memory[lastPiece]) {
                return [i,j,memory[lastPiece]]
            }else {
                memory[nums[j]] = j;
            }
            console.log(memory);
        }
 

        
    }
    return [];
}

// console.log(twoSum([3, 2, 4],6));
// console.log(twoSum([6, 2, 3, 9, -5, 5, 7, 2],1));
console.log(threeSum([1,2,3,4,5],9));
