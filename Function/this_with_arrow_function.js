// this keyword: this keyword refers to an object that is executing the current piecce of code.

// in an object

const Student = {
  name: "Adarsh",
  age: 23,
  maths: 89,
  english: 88,
  reasoning: 82,
  getAvg(){
    let avg = (this.maths+this.english+this.reasoning)/3; // without this keyword gives error
    return avg;
  }
}

console.log(Student.getAvg)
let avg = Student.getAvg();
console.log(avg);
console.log(this);


// this with arrow function

const Employee = {
  name : "Raman",
  age : 34,
  prop : this,
  getName(){
    console.log(this); // refer Employee object means calling object scope
    return this.name;
  },
  getAge : ()=>{
    console.log(this);// refer calling parent object mean Employee parent i.e., Window object
    return this.age;
  },
  getInfo: function(){
    setTimeout(() => {
      console.log("get info method called")
      console.log(this);  // the parent of arrow function is getInfo and getInfo is called by Employee Object. So Employee
    }, 1000);
  },

  getInfo2: function(){
    setTimeout(function() {
      console.log("getInfo2 method is called");
      console.log(this); // calling object is object containg setTimeout() method i.e., window object. So Window
    }, 2000);
  } 
}
console.log("calling arro function containg this");
Employee.getAge();
console.log("calling normal function containing this");
Employee.getName();
console.log("calling getInfo ");
Employee.getInfo();
console.log("calling getInfo2");
Employee.getInfo2();