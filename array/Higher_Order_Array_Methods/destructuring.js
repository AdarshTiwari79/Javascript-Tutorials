// assigning values to a variable from list or object.

let arr = [3, 4, 5, 6, 7, 8, 9];

// array destructuring
let [first, second, ...others] = arr; // first, second and ...others will acts as variable

console.log(first);
console.log(second);
console.log(...others);

let obj = {
  item1: "phone",
  item2: "watch",
  comment: "good job",
  status: "complete",
};
// object destructuring
let { item1, item2: dusra, message: custom = "this is custom message" } = obj;

console.log(item1);
console.log(dusra);
console.log(custom);
console.log(obj);
