/* 
1. De-structuring : Extract properties from objects easily.
2. We can extract more than one property at once.
3. shorthand Property : {message : message}
simplifies to just message.
4. Shorthand Method : Define methods directly inside the object without the function keyword.
*/

let product = {
  company : 'Apple',
  itemName : 'SmartWatch',
  price : 388,
};

// Normal usecase 
/*
let company1 = product.company;
console.log(company1);
*/

// De-structuring : the same thing in shortcut 
/*
let {company} = product; // Name inside the curly braces should be same as in the object.
console.log(company);
*/

// We can use the de-structuring for more than one property of the object.
let {company, itemName} = product;
console.log( " ",company,'\n',itemName);


// Property shorthand
/*
let price = 88;
let Item = {
  companyName : 'Samsung',
  itemName : 'Mobile Phone',
  price : price,
};


console.log(Item.price);
*/

// same as 
/*
let Item1 = {
  companyName : 'Samsung',
  itemName : 'Mobile Phone',
  price, // when the key and value have same name as in this case price.
};

console.log(Item1.price);
*/

// Method shorthand
/*
let books = {
  bName : 'JSP',
  bPrice : 938,
  bookDetail : function(){
    return `${this.bPrice.toFixed(2)}`;
  },
};

console.log(books.bookDetail());
*/

// is same as 
let books = {
  bName : 'JSP',
  bPrice : 938,
  bookDetail(){
    return `${this.bPrice.toFixed(2)}`;
  },
};

console.log(books.bookDetail());