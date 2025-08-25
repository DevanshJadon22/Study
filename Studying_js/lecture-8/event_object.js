let btn=document.querySelector('#btn1');
btn.onclick=(evt)=>{
    console.log(evt);//prints the object evt containing information about envent
    console.log(evt.type);//this will return 'click'
    console.log(evt.target);//this will return the element on which event is working.
    console.log(evt.clientX,evt.clientY);//gives position on x coordinate and Y coordinate where event occurs.
}
let b=document.querySelector('.box');
b.onmouseover=()=>{
    console.log('you are inside div.');
}