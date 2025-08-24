let div=document.querySelectorAll(".box");
console.dir(div);
//changing text of all the divs one by one by selecting them through index in node list.
// div[0].innerText="New unique text 1";
// div[1].innerText="New unique text 2";
// div[2].innerText="New unique text 3";

// we can changing text of all the divs one by one by selecting them through index in node list using for of loop.
let idx=1;
for(let divs of div){
    divs.innerText=`New unique text ${idx}`;
    idx++;
}