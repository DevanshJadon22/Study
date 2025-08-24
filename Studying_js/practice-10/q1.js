//for changing/updating the property of an dom element(object) we require firstly to access the element then get property to be changed then set(change/update) the propeerty.
let h2=document.querySelector('h2');
console.dir(h2);
console.dir(h2.innerText);//before appending
h2.innerText=h2.innerText+'From Apna College students.';
console.dir(h2.innerText);//inner text of h2 after appending.