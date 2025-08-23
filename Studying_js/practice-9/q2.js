let n=prompt("enter the number: ");

let arr=[];
for (let count = 1; count <= n; count++) {
    arr[count-1]=count;
}
console.log(arr);
//finding sum of all elements in array
let sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(sum);

// finding factorial using reduce method
let factorial=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(factorial);