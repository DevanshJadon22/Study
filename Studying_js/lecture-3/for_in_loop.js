//for in loop (used for objects and arrays.)
let student={
    fullName:'rahul kumar',
    age:20,
    cgpa:7.5,
    isPass:true
};

for(let key in student){
    console.log('key is',key,' and value is',student[key]);
}
//this for in loop will give output as
/*
key is fullName  and value is rahul kumar   for_in_loop.js:10 
key is age  and value is 20                 for_in_loop.js:10 
key is cgpa  and value is 7.5               for_in_loop.js:10 
key is isPass  and value is true            for_in_loop.js:10
 */