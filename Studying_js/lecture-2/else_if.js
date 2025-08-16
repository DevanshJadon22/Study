let mode='silver';
let color;
if(mode==='dark'){
    color='black';
}
else if (mode==='blue') {
    color='blue';
}
else if (mode==='pink') {
    color='pink';
}
else{
    color='white';
}
console.log(color)
//using thernary operator.
// let age=25;
// let result= age>=18?"adult":"not adult";
// console.log(result);

// let age=25;
// let result= age>=18?"adult":"not adult";
// console.log(result);

// this above code and below code will give us the same output.

let age=25;
age>=18?console.log("adult"):console.log("not adult");//this is nothing but compact if-else