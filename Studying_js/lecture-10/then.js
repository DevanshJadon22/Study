const getpromise=function(){
    return new Promise((resolve,reject)=>{
        console.log("I am a promise.");

        //if i write here reject() ,then promise.then() function will never run. we need .catch() function for error object.
        // resolve("sucess");
        //let us say i write reject()
        reject("error occured.");
    });
};

let promise=getpromise();
promise.then((res)=>{//here res is by default argument for .then()
    console.log("promise fullfilled. ");
});

// let promise1=getpromise();
promise.catch((err)=>{//here err id by default the argument for .catch()
    console.log("rejected",err);
});