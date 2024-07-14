/*
1. JavaScript Object Notation: Not the same as JS object, but similar.
2. Common in network calls and data storage.
3. JSON.stringify() and JSON.parse()
4. String are easy to transport over network.
5. JSON requires double quotes. Escaped as \".
6. JSON is data format, JS object is a data structure.
*/

// Normal JS object 
/*
let Name = {
  firstName : 'Adarsh',
  lastName : 'Tiwari',
};

console.log(typeof Name);
console.log(Name);
*/

// JSON 
let FullName = {
  "firstName" : "Saurav",
  "lastName" : "Tiwari",
}

console.log(typeof FullName);
console.log(FullName);

let str = JSON.stringify(FullName);
console.log(typeof str);
console.log(str);

let newName = JSON.parse(str);
console.log(typeof newName);
console.log(newName);

