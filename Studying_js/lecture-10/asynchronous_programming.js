console.log("One");
console.log("Two");
setTimeout(()=>{console.log("hello");},2000);
console.log("Three");
console.log("Four");

// the output of these lines of code is as follow:
// One 
// Two 
// three 
// Four 
// Hello
//here the execution of lines written after setback() will gwt executed immediately they does not wait 2 seconds untill hello is printed.