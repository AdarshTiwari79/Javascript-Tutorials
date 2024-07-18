// every method takes callback function and callback function takes element of array as parameter
// every method return either true or false
// return true if condition is true for every element of array
// return false if condition is false for any element of array
// this can be assumed as AND logical operator

let arr = [3, 4, 5, 6, 7, 8, 9];

let check = arr.every((el) => {
  return el % 2 == 0;
});

console.log(check);

// some method takes callback function as argument and same callback takes every element of array as argument
// some method return either true or false
// return true if condition is true for any element of array
// return false if condition is false for no element of array
// this can be assumed as OR logical operator

let arrSome = [3, 4, 5, 6, 7, 8, 9];

let checkSome = arrSome.some((el) => {
  return el % 2 == 0;
});

console.log(checkSome);
