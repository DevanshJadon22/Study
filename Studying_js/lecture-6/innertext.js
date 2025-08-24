let select=document.querySelector("div").innerText;//this prints all the text (innertext ) associated with div tag and its(div's) children tags
console.dir(select);
//or
console.dir(document.querySelector('div').innerText);

// when i wrtie in console as :document.querySelector("div").innerText the output is
//this command prints a string as ooutput in console.
//output is as follow: 'Fruits\nmango\napple\nlitchi' 


//printing html associated with the tag "div"
// code for this is : document.querySelector("div").innerHTML
// the output of this code is a string only 
//output is as follow : 
//'\n        <h3>Fruits</h3>\n        <ul>\n            <li>mango</li>\n            <li>apple</li>\n            <li>litchi</li>\n        </ul>\n    '