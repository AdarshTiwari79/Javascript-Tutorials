// DOM : Document Object Model
// ducument : it is an object containing elements and other features of web pages as property of it
// the elements also acts as object. So as we manipulate the property of a normal object we can manipulate the properties of elements too using dot(.) operator

// Console method to print document object on console is : console.dir(document);

// Process of DOM manipulation

// Firstly, we select the element using different selector methods of document object and then store them in variable. Then using dot operator we access the required property of the element we want to manipulate. By simply using = operator we feed new value.

// Names of methods for selecting element of webpage as object using document object:
// 1. getElementById() ---> since id attribute contain unique value so this method will return null if no id will match with id provided in argument of this method.

// 2. getElementByClassName()  -----> Since multiple element can have same class attribute value so it will return collection of element if match with argument class.

// 3. getElementByTagName() -----> this will also return collection

// 4. querySelector() --------> Mostly used method to select an element. It will take parameter as in css for selecting tag while designing for them. In case multiple element with same matched with argument then it will return first occurance only.

// 5. querySelectorAll()  --------------> return collection takes arg same as in querySelector().

// Manipulation

// Firstly, we select the element using different selector methods of document object and then store them in variable. Then using dot operator we access the required property of the element we want to manipulate. By simply using = operator we feed new value.

// 1. Content Manipulation : commonly three properties of any selected tag object are use to manipulate the content of any element object.

// a. innerHTML : this will give all the contant with tags within them
// b. innerText : this will give contant visible on page
// c. textContent : this will give content as in developer editor

// Since these are all properties. So first access using any selector then give value accordingly.

// 2. Attribute Manipulation : commly used method for attribute manipulation is getAttribute(), setAttribute(). getAttribute takes single arg which is attribute name and setAttribute takes two args which are attribute name, value. Select the element object and store in a variable then apply these methods.

// Drawback of setAttribute() is it set single value and replace existing value means than if we want to set multiple class names for class attribute then it will not be useful.
// This drawback only for class attribute can be fixed using classList attribute.
// classList attribute returns a collection which can be manipulated by using methods: add(), remove(), contain(), toggle()---> it will add if class doesn't exist and remove if class exist. every method takes arg.

// 3. Style Manipulation : style is an object which is available as a property in every element object. It has multiple attribute which serve to set or manipulate style of the element.
// as setAttribute() style object properties also set single style and this style is inline so it's not recommended to use this.

// Navigation through element object properties

// 1. parentElement : this property of selected element object will return the object of parent element.
// 2. childElementCount : this property of selected element object will return collection of child element object.
// 3. nextElementSibling  : return single element object
// 4. previousElementSibling : return single element object.

// Adding element on page

// firstly, use createElement() of document object to create a new element. This method will return the object of element passed as argument of this method.
// Now where we want to add this element select that element and store it in a variable lets say target.
// now we have four methods to add element(which we created) corresponding to target.
// append(element) ---> this method can add simple string too, prepend(element), appendChild(element), insertAdjacentElement(where, element). Here in all methods element is variable in which we store our created element object. The value of where are : beforebegin, beforeend, afterbegin, afterend. this where value are corresponding to target element.

// Remove element

// there are two commonly used methods are : remove(), removeChild()
// to use remove operate it with object of element want to remove
// to use removeChild operate it with parent element object of element want to remove.

// Can explore more about document object on MDN
