// normal function declaration with arguments and return keyword

function addNumbers(a, b){
  let sum = a + b;
  return sum;
}

// normal calling of function

let result = addNumbers(3,5);

console.log(result);


// Function expression : this is basically function without name 

let subtraction = function(a,b){
  let sub = a - b;
  return sub;
}

// calling of function expression

let r = subtraction(3,2);

console.log(`This is function expression result : ${r}`)


// Implementing concept of Lexical scope

function outerFunc(){
  let x = 20;
  let y = 39;
  function innerFunc(){
    console.log(`This is from innerFunction : ${x+y}`); // variables of outerfunction can be accessible by innerfunction this refers the lexical scope of variable
  }
  innerFunc(); // since inner function has block scope so accessible inside body of outerfunction only.
}

console.log("Calling outerfunction")
outerFunc();
