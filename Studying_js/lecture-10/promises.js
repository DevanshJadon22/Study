//creating promises
// let promise =new Promise((resolve,reject)=>{
//     console.log("i am a promise. ");
//     //if we want to fullfill our promise then we write resolve inside promise we can also pass argument(value )inside resolve also.
//     //this resolve() function is internally created by js only ,it is not a man made method/function.
//     resolve(123);//this will make our promisestate="fullfill" and in result this 123 is stored and shown;
// });//here the resolve and reject are both callback(that is function passed as parameters to another function) the resolve function is handling (triggered when promise is fullfilled) sucess while reject is handling failure.

// //similarly our promise can be unfulfilled that is the work to be done iside promise fails.
// let promise1 =new Promise((resolve,reject)=>{
//     console.log("i am a promise. ");
//     //if our promise is not fullfilled(fails)  then we write reject inside promise we can also pass argument("some error " )inside reject also.
//     //this reject() function is internally created by js only ,it is not a man made method/function.
//     reject("some error occured ");//this will make our promisestate="rejected" and in result this "some error occured" is stored and shown as an error message "some error occured.";
// });//here we are generating our promisse but in general senarios api returns us promises when we request api with something and we only hanldes api

function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        // console.log("data ",dataid);
        // resolve("sucess");
        reject("error. ");
        if(getnextdata){
            getnextdata();
        }
    }, 5000);
    });
}

//here in this code above getdata() is not giving us the data immediately but else it gives us promise immediately after 5 seconds if our getdata return the value succesfully then our promise state becomes fullfilled and result of promise stores "sucess".