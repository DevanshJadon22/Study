//generally this below code is returned by APIS only
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("somedata1");
            resolve("sucess");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("somedata2");
            resolve("sucess");
        },4000);
    });
}

// function asyncFunc3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("somedata1");
//             resolve("sucess");
//         },4000);
//     });
// }

//here in output we want first  the data1 then data2.


console.log("fetching data1");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
});

console.log("fetching data2");
let p2=asyncFunc2();
p1.then((res)=>{
    console.log(res);
});

//here as per above code we can think that first the promise is returned from function 1 then function2 will return the promise after function1 has resolved promise p1 returned from function1 but actually here both the promises of both the functions are resolve at the same time.
//firstly both fetching data1 and fetching data2 will be printed at same time
// and after 4 sec 
// both 
// data1
// success
// data2
// success
// will be printing at the same time.

// but if i want to print things of function2 after function1 then we have to use promise chaining that is one then() inside another then().