let age = 75;
let gender = 'male';
let finalDiscount;

if(age <= 5){
  finalDiscount = 100;
}else if(gender === 'Female' || age <= 8){
  finalDiscount = 50;
}else if(age > 65){
  finalDiscount = 30;
}else{
  finalDiscount = 0;
}

console.log(`your final discount is ${finalDiscount}%`);



/*
let discount1;
if(gender === 'Female')
{
  discount1 = 50;
  // console.log('you got a discount of 50%')
}
else
{
  discount1 = 0;
  // console.log('You got no discount');
}

// discount = gender === 'Female'? '50%' : 'no';
// console.log(`you got ${discount} discount`);

let discount2;
if (age < 5){
  discount2 = 100;
  // console.log('your ticket is free of cost');
}else if(age > 5 && age <= 8){
  discount2 = 50;
  // console.log('your ticket price is half');
}else if(age > 65){
  discount2 = 30;
  // console.log('your discount is 30%');
}

if(discount1 >= discount2){
  console.log(`you got a ${discount1} % of discount.`);
}
else{
  console.log(`you got a ${discount2} % of discount.`);
}
*/
