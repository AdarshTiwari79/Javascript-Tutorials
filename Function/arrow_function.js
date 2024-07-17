const functioName = (arg1, arg2) =>{
  return arg1 + arg2;
}

let r = functioName(2,3);
console.log(r);


// having one argument then paranthesis is optional

const newFunc = n =>{
  return n*n;
}

let check = newFunc(3);
console.log(check);


// implecit return in arrow function is achieved when function body has single thing to do
// meaning return without return keyword
// in this case paranthesis is used

const impFunc = (a, b)=>(a+b);

let res = impFunc(3,4);
console.log(res);