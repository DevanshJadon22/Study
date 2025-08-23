let arr=[1,2,3,4,5];
arr.forEach((val)=>{//value at each index.
    console.log(val);
});

//printing all the elements of array in uppercase.
let city=['delhi','pune','mumbai'];
city.forEach((val,index,arr)=>{
    console.log(val.toUpperCase(),index,arr);
});