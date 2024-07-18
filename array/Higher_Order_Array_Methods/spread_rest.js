// spread is a concept or sytax to spread elements of an array individually

let arr = [3, 4, 5, 6, 7, 8, 9];

console.log(...arr);

// Now when we use spread notation for any argument for a function during function definition then it refers a array of argument passed while calling function. This is Rest concept

let rest = function (...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
};

rest(1, 2, 3, 4, 5);

// if we want to pass any other argument except ...args then use it before ...args

// Default parameter : When we want to assign value we should care that if have multiple parameters so assign to last. Because js automatically fill argument is order

function defaultCheck(a, b = 3) {
  // function definition
  return a + b;
}

let res = defaultCheck(99);
console.log(res);
