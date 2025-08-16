//template literals is nothing but a special kind(type) of string only which are declared using `` .
let obj={
    item:"pen",
    price:10
};

// if i want to print the statement " the cost of pen is 10 rupees." we have 2 methods to write this statement using java script.

//method one:using normal string method
console.log("The cost of ",obj.item,"is ",obj.price," rupees .");

//second method to write this statement in javascript is using template literals.
let output=`The cost of ${obj.item} is ${obj.price} rupeees .`;
// here when we write ${obj.item} actually we writing variables(item ) value in string statement that is at the place of ${obj.item} pen will be coming in orignal statement in output.
// in method 2 our 10 will not be highlighted as it is not a number(numbers in javascript is highlighted when printed in console.) it is a part of a big string(10 is also a string.) 
console.log(output);
//syntax of template literals is: `string text ${expression} string text`
//in template literals firstly the value of expression is calculated then converted into string.