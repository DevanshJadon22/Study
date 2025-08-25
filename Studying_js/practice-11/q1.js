let bod=document.querySelector('body');
let newbutton=document.createElement('button');
newbutton.innerText='click me.';
bod.prepend(newbutton);
newbutton.style.backgroundColor='red';// the styling added here through .style method is inline styling
newbutton.style.color='white';