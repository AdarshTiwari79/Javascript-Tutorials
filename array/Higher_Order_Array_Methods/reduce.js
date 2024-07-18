// reduce takes callback function as arg and callback function takes two arguments one accumulator and another one is elements of array
// return single value

let arr = [3, 4, 5, 6, 7, 8, 9];

let result = arr.reduce((accumulator, el) => {
  return accumulator + el;
});

console.log(result);
