// A function that does one or both :
// takes one or multiple functions as arguments.
// returns a function.


// HOF with function as an argument
function displayMultiple(func, n){
  for(let i=0; i<n; i++)
  {
    func(); // calling argument function
  }
}

let greet = function(){
  console.log("hello")
}

displayMultiple(greet, 3); // calling higher order function


// passing complete function definition as argument in higher order function can be achieved using arrow function as argument

function high(func, n){  // HOF define here
  for(let i=1; i<=n; i++){
    func();
  }  
}

high(()=>{  // HOF calling
  console.log("this is lower function");
}, 2)


// HOF with returning a function
function functionFactory(condition){
  if(condition == true){
    return function trueFunction(){
      console.log("this is true function");
    }
  }else{
    return function falseFunction(){
      console.log("this is false function");
    }
  }
}

let cond = false;

let obtainedFunc = functionFactory(cond);
console.log ("from here HOF with returning function is executing")
obtainedFunc();