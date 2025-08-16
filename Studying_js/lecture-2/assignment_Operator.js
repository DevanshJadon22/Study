let a=5;
let b=2;

console.log("a=",a," & b=",b);

// assignment operator
a+=4;//this means a = a+4;
console.log("a = ",a);//the output will be 9.

//comparison operators
// comparison operator gives output as Boolean.
console.log("5==2" ,a==b);//her the output will be in the form false(boolean)

let c=5;//data type here is number
let d="5";//here the data type is string

console.log(" 5==5 ", c==d);//here the output will be true as js internally(by default ) convert the "5"(string ) to 5 (number) for variable d. when we compare c and d using == operator.

//but if i want that the variable containing number and the variable containing string (i.e. d) when compared  should not give true as their data type is different then we must compare c and d using stricter comparison operator for eqauls to( that is '===').
console.log('5==="5"',c===d);//this will give output as false.