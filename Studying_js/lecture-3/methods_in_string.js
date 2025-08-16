//there are many inbuilt functions for strings
let str="ApnaCollege";
str.toUpperCase();
console.log(str);//the output of this statement will be "ApnaCollege"
//as all the in built methods associated with string does not make changes to original string(that is str here.).

// we can store the new string returned by method in new variable then print it.
let st='ApnaCollege';
let st2=st.toUpperCase();
console.log(st);//the output is 'ApnaCollege'
console.log(st2);//the output is 'APNACOLLEGE'

//using trim method

let se="  Apna  College  JS   ";
console.log(se.trim());// this removes the whitespaces from starting and ending.

//using slice method of string.
let s='0123456';
console.log(s.slice(1,3));//here the output is 12.

//using concat method in string
f='Apna';
d='College';
console.log(f.concat(d));
//we can also do concatination using + symbol
let p="i am studying from ";
let a='Apna';
let b='College';
console.log(p+a+b);

//using replace method 
let r='hellololo';
console.log(r.replace('lo','p'));// the output that will be printed on console will be 'helplolo'.
//replace() method only replaces the first matching occerence that is replacement happens only one time.

//but if i want to replace all the 'lo' occurences with 'p' then i must use replaceAll() method.
//that is code as given below.
console.log(r.replaceAll('lo','p'));//here the output will be 'helppp'.

//using charAt(idx)method to return the character present at idx index
console.log(r.charAt(2));//this will print the character at index=2 for r(string) that is output is 'l'. 