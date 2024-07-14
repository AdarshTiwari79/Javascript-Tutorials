/*
let product = {
  company : 'Apple',
  pName : 'Smart Watch',
  price : 200,
  'product-group' : 'Watches',
}

console.log(product.company);
console.log(product['product-group']);
let group = 'product-group'; // this is to show the usecase of [] while . is not able to access it
console.log(product[group]);

delete product.price;
console.log(product);
*/

/*
1. Objects can contain Primitives like numbers and strings.
2. Objects can contain other objects and are called Nested Object.
3. Functions can be object properties.
4. Functions inside an object are called methods.
5. Null Value: Intentionally leaving a property empty.
*/

/*
let product = {
  company : 'AT',
  itemName : 'Study Material',
  price : 488,
  rating : {
    stars : 4.5,
    noOfReviews : 88,
  },
  displayPrice : function(){
    return `${this.price.toFixed(2)}`;
  }
};

console.log(product[`rating`]);
console.log(product.displayPrice())
*/

// Autoboxing

/*
1. Automatic conversion of primities to objects.
2. Allows properties and methods to be used on primitives.
3. Examples: Strings have properties and methods like length, toUpperCase etc.
*/
/*
console.log('hello Adarsh'.toUpperCase());
console.log(223.33.toLocaleString());
console.log(typeof(223.33.toLocaleString()));
*/

// Object Refereces
/*
1. objects work based on references, not actual data.
2. Copying an object copies the reference, not the actual object.
3. When comparing with ==, you're comparing references, not content.
4. Changes to one reference affects all copies.
*/

let a = 3;
let b = a;
console.log(`a = ${a}, b = ${b}`);
a = 9;
console.log(`a = ${a}, b = ${b}`);


let x = {num : 3};
let y = x;
console.log(`x = ${x.num}, y = ${y.num}`);
x.num = 8;
console.log(`x = ${x.num}, y = ${y.num}`);