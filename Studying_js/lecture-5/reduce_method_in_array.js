let arr=[1,2,3,4];
let output=arr.reduce((prev,curr)=>{
    return prev+curr;
});

console.log(`the sum of all the elements in array is: ${output}`);
//here in reduce method we pass a callback function with 2 arguments (prev,currentval) to perform some task and return output as a number from array.

//using reduce method to find the largest value in array.
let num=[5,6,2,3,1];
let largest=num.reduce((prev,currval)=>{
    if (prev>currval) {
        return prev;
    }
    else{
        return currval;
    }
});
console.log(`the largest value in array is ${largest}`);