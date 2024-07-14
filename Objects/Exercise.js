// 1. Create object to represent a product from Myntra
/*
let product = {
  Name : 'charger',
  brand : 'Vivo',
  price : 150,
};

console.log(product.brand);
*/


// 2. Create an Object with two references and log changes to one object by changing the other one.
/*
let x = {
  value : 883,
};

let y = x;

x.value = 388;

console.log(`value of x in first reference is : ${x.value} and in y is ${y.value}`);
*/


// 3. Use bracket notation to display delivery-time.
/*
let product = {
  Name : 'charger',
  brand : 'Vivo',
  price : 150,
  'delivery-time' : 'today',
};

let time = 'delivery-time';
console.log(product[time]);
*/

// 4. Given an object {message: 'good job', status:'complete'}, use de-structuring to create two variables message and status.
/*
let obj = {
  message : 'good job',
  status : 'complete',
};

let {message, status} = obj;

console.log(message, "\n",status);
*/


// 5. Add function isIdenticalProduct to compare two product objects.
let obj = {
  item1 : 'phone',
  item2 : 'watch',
  message : 'good job',
  status : 'complete', 
  isIdenticalProduct : function(){
    if(this.item1 == this.item2){
      return `both the items are same`
    }else{
      return `bothe the items are different`
    }
  }
};

let fvalue = obj.isIdenticalProduct();
console.log(fvalue);

