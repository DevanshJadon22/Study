let nums=[1,2,3,4,5,6,7];
nums.splice(2,2,101,102);
console.log(nums);
//adding elements using splice method at a specified index
let num=[1,2,3,4,5,6,7];
// num.splice(2,0,101)//this add 101 at index 2
// console.log(num);

//deleting element using splice element
// num.splice(3,1);//deletes element at index 3.
// console.log(num);

//replacing values using splice method.
num.splice(3,1,101);// here we are replacing 4 with 101
console.log(num);