//here in this question we have to create a new class in css and append this clas to the <p> element.
let para=document.querySelector('p');
para.getAttribute('class');
//now to change the class attribute we can use setAttribute()method but this setAttribute() method completely overwrite the class which means all the old styling will be removed or vansihed.
// para.setAttribute('class','newclass');

//but we haave to add new class 'newclass' along with the previous class (that is we want both the class together.)
//so we use classlist
para.classList;//this return the list of classes associated with para
//to add a new class in classlist we use .add function and to remove we use .remove().
para.classList.add('newclass');