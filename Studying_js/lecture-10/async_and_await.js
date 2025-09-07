function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);//when ever the api returns /resolve the promise then 200 message is shown .generally websites shows 200 message when succesful api call takes place.
        },2000);
        
    });
}

async function getweatherdata(){
    await api();//1st call 
    await api();//second call
    //here firstly the work of 1st call is done then after that the work of 2nd call is done the both work does not occur simultaneously they occur with a difference of 2seconds here.
    //pehle 1st call complete hogi fhir hi second call complete hogi.
}

async function hello(){
    console.log("hello");
}

//when i write async keyword before function hello above then automatically this hello function will return a promise when called(hello functionis called.).
// the literal meaning odf await in english is to wait. we can use await keyword oly in async function not in any random function.

//using the concept of async await for situations like if 1st thing is present then only search for second thing.(first search for username if username exists then search for password.)

function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("the data is: ",dataid);
            resolve("sucess");
        },2000);
    });
}
//async-await usage on getdata()function

// we can only use await with async function only.
async function getalldata() {
    console.log("getting data 1...");
    await getdata(1);
    console.log("getting data 2...");
    await getdata(2);
    console.log("getting data 3...");
    await getdata(3);
    console.log("getting data 4...");
    await getdata(4);
    console.log("getting data 5...");
    await getdata(5);
}

//IIFE a function without name which immediately get invoked when defined we donot have to call it, if we want that above code to run without calling a function but the point is that iife can be used only one time.
//syntax: (function )();
(async function () {
    console.log("getting data 1...");
    await getdata(1);
    console.log("getting data 2...");
    await getdata(2);
    console.log("getting data 3...");
    await getdata(3);
    console.log("getting data 4...");
    await getdata(4);
    console.log("getting data 5...");
    await getdata(5);
})();
