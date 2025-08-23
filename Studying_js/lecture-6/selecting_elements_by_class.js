let heading=document.getElementsByClassName("heading-class");
console.log(heading);
console.dir(heading);
//here when we acess elements by classname then we get output as a html collection(that is an array like thing )
console.log(document.getElementsByClassName('heading'))//this will give me an empty html collection as output and console.log() will print it.
console.dir(document.getElementsByClassName('heading'))//this will give me an empty html collection as output and console.log() will print it.
//but if i write console.log(getelementbyid('heading)) or console.dir(getelementbyid('heading)) in this both cases we will be getting null printed in console as output.
console.dir(document.getElementById('heading'));//this will print null in the console. as there does not exist any element (html element) with id='heading.