let marks=[85,97,37,44,76,60];
let avg=0;
let sum=0;
for(let m of marks){
    sum+=m;
}
avg=sum/marks.length;
console.log(`the average marks of class is ${avg}`);