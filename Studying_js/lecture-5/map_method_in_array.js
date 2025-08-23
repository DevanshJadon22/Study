let num=[67,52,39];
//printing all the elements in num using map
num.map((val)=>{
    console.log(val);
});
//creating copy of map array using map method
let copy=num.map((val)=>{
    return val;
});
console.log(num);
console.log(copy);//both will print same elements.