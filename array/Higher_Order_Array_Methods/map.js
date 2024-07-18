// map function of array takes callback function as argument and callback function takes individual elements of original array as argument by default and return array of operated original array elements

let arr = [2, 3, 4, 5, 6, 7, 8, 9];

let mappedArr = arr.map((el) => {
  let square = el * el;
  return square;
});

console.log(mappedArr);

// we can take array of objects and perform operation on that too

let objArr = [
  {
    name: "Adarsh",
    marks: 38,
  },
  {
    name: "Shubham",
    marks: 88,
  },
];

let tripleMarks = objArr.map((el) => {
  return el.marks * 3;
});

console.log(tripleMarks);
