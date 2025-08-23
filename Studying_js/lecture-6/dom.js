console.dir(window.document);
//using this we can print /acess all the properties of document object .
//as window object is global object we can also write console.dir(document); in place of console.dir(window.document);

//now if i want to print/acess  the whole html code for body trough js then i/we can write 
console.log(document.body);//or either console.log(window.document.body);

//here in javascript console.log() gives us the html code for an object included in window.
//while when we write console.dir(objname) then this gives us the structured properties methods detailed model of that object.

//we can make changes in our html code using js for implementing dynamic running changes in our webpages when user clicks on certain button like switching between light mode and dark mode.
// document.body.style.backgroundColor='green';