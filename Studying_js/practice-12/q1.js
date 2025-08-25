// let modebtn=document.querySelector('#mode');
// let curr_mode='Light';
// modebtn.addEventListener('click',()=>{
//     if(curr_mode==='Light'){
//         curr_mode='dark';
//         document.querySelector('body').style.backgroundColor='black';
//     }
//     else{
//         curr_mode='Light';
//         document.querySelector('body').style.backgroundColor='white';
//     }
//     console.log(curr_mode);
// });

//there is another way to make a toggle switch for switching between dark mode and light mode using classes.
let modebtn=document.querySelector('#mode');
let curr_mode='light';
let body=document.querySelector('body');
modebtn.addEventListener('click',()=>{
    if(curr_mode==='light'){
        curr_mode='dark';
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else{
        curr_mode='light';
        body.classList.add('light');
        body.classList.remove('dark');
    }
    console.log(curr_mode);
});