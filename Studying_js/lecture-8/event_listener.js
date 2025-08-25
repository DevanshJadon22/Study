let btn=document.querySelector('#btn1');
btn.addEventListener('click',(evt)=>{
    console.log('button1  was clicked handler-1.');
    //we can also print evt (event object) 
    console.log(evt);
    console.log(evt.type);
})
btn.addEventListener('click',()=>{
    console.log('button1  was clicked handler-2.');
})
//here in event listner we can create multiple event listner for a single event on same element and all the eventlistner will be executed simultaneously.
const handeler3=()=>{
    console.log('button1  was clicked handler-3.');
}
btn.addEventListener('click',handeler3)
btn.addEventListener('click',()=>{
    console.log('button1  was clicked handler-4.');
})

// if we want to remove the event listner 3 for btn we must write:
// btn.removeEventListener('click',callback for eventlistner-3);
// in the removeEventListner() the callback passed must be same as the the callback written earlier in addEventListner()function (that is the reference/address of both the callback must be same.).
//removingEventListener() for handler3
btn.removeEventListener('click',handeler3);//this removes handel-3 eventlistner for btn.