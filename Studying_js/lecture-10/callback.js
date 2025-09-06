function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
//when ever we pass a function as parameter into another function then we have to just write the name of function(callback) without() inside another function as parameter. 
calculator(4,5,sum);

// in callback we can pass a pre-existing function or we can also write an arrow function in place of callback(if.e. parameter to another function)

//the below code is just same as calculator(4,5,sum);
calculator(4,5,(a,b)=>{
    console.log(a+b);
});

//writing asynchronous callback functions

const hello=()=>{
    console.log("Hello");
}
setTimeout(hello,3000);//this is a asyncronous function which takes an function as parameter . here the output of this is hello which will be printed after 3 seconds of waiting while all other intructions will be executing parallely.