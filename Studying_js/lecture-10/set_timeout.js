function hello(){
    console.log("Hello");
}
// setTimeout(hello,2000);//this line of code states that hello function will get executed after 2000 miliseconds/2 seconds

//i can also write arrow function inside settimeout() function.
//eg
setTimeout(()=>{console.log("hello");},2000);//same as above one this will cuase a delay of 2seconds in execution of arrow function.