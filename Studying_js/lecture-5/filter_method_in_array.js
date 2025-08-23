let num=[1,3,2,4,6,5,7,8,9,10,12,13,14];
//filtering out even elements of num array in new array.
let newarr=num.filter((val)=>{
        return val%2===0;
});

console.log(newarr);