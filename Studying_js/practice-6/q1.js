let companies=['bloomberg','microsoft','uber','google','IBM','netflix'];
console.log(companies);

//removing first comapny from array
companies.shift();
console.log(companies);

//replacing uber with ola
companies.splice(1,1,'ola');
console.log(companies);

//adding amazon at the end of array.
companies.push('amazon');
console.log(companies);