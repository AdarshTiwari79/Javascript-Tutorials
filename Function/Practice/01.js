// Create a method to check if a number is odd or even.

// function checkEvenOrOdd(num){
//   if(num % 2 === 0){
//     return `it's an even no.`;
//   }
//   else{
//     return `it's an odd no.`;
//   }
// }

// let result = checkEvenOrOdd(8);
// console.log(result);

// Create a method to return larger of the two numbers.

// function greaterNumber(num1, num2){
//   if(num1 > num2){
//     return `greater number is ${num1}`;
//   }else{
//     return `greater number is ${num2}`;
//   }
// }

// let result = greaterNumber(3,7);
// console.log(result);

// Create a method to convert Celsius to Fahrenheit F=(9/5)*C + 32

function c2FConverter(celcius){
  let fahrenheit = (9/5)*celcius + 32;
  return fahrenheit;
}

let result = c2FConverter(33);
console.log(result);