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

//if i want that second function must resolve its promise after function1 resolve its promise and not simultaneously then we use promise chaining.

console.log("fetching data 1");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log("fetching data 2");
    let p2=asyncFunc2();
    p2.then((res)=>{});
});

//i can also write this above  code as below mentioned also:
// console.log("fetching data 1");
// asyncFunc1.then((res)=>{
//     console.log("fetching data 2");
//     asyncFunc2.then((res)=>{});
// });