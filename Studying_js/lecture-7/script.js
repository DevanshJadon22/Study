let div=document.querySelector('div');
console.log(div);

//getting attribute of div
let id=div.getAttribute('id');
console.log(id);

let names=div.getAttribute('name');
console.log(names);

//we can also change the class name or other attributes of nodes using setatrribute() methods
let paragraph=document.querySelector('p');
console.log(paragraph.getAttribute('class'));
paragraph.setAttribute("class","newpara");
console.log(paragraph.getAttribute('class'))