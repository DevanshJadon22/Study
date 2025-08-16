//writting for-of loop

//in for of loop we do not need to initialize variable write stopping condition and updation statement
let str="Devansh";
let size=0;
for(let i of str){//iterator contains the characters of str.
    console.log(i);
    size++;
}
console.log('size of the string is :',size);