// filter function of array takes callback function as argument and callback function takes element of original array as argument by default and return an array based on codition will be true

let arr = [3, 4, 5, 6, 7, 8, 9];

let even = arr.filter((el) => {
  return el % 2 == 0;
});

console.log(even);
