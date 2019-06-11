// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 1000
// }

// //1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// //2
// basket.forEach(item => {
//   console.log(item);
// })

// for (item in detailedBasket) {
//   console.log(item);
// }

// for (item of basket) {
//   console.log(item);
// }

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    result = arr[0];
    arr.forEach(num => {
        if(num > result){
            result = num;
        }
    })
    return result;
}


function biggestNumberInArray2(arr) {
    result = arr[0];
    for(num of arr){
        if(num > result){
            result = num;
        }
    }
    return result;
}
// console.log(biggestNumberInArray1(array));
// console.log(biggestNumberInArray2(array));



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
    for(element in basket){
        if(element === lookingFor){
            return `${lookingFor} is in your basket`;
        }
    }
    return `oops,${lookingFor} is not in your basket`
}

// console.log(checkBasket(amazonBasket, "books"));
// console.log(checkBasket(amazonBasket, "banana"));
