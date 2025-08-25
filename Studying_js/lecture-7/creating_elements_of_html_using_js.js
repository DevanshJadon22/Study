let newbtn=document.createElement('button');// here the syntax is document.createElement('tagname') this will create an html element aur element in dom using js only.
console.log(newbtn.innerText);//this will print nuthing as there is no inner text(text ) in button element
//but we can write text in button tag(element)
newbtn.innerText='click me';
console.log(newbtn.innerText);// output on console is : click me

//for adding the button in div and at the last in div we first have to access div then add the button at last(or anywhere if we wish ) with methods like: .node.append();,etc
let div=document.querySelector('div');//accesing div 
div.append(newbtn);//adds the button in the last of div EventTarget(element)

//deleting a node from DOM tree
let para=document.querySelector('p');
para.remove();