//if we want to write a code such that i write 3 asynchronous functions line by line which work one after another that is each function executes after the execution of previous function.
function getdata(dataid,getnextdata){
    //2sec delay
    setTimeout(() => {
        console.log("data ",dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
}

// getdata(1,getdata(2));//if i write this this will give me error as here getdata(2) will get executed immediately.

//the below code is called callbackhell 
getdata(1,()=>{
    console.log("getting data2 ...");
    getdata(2,()=>{
        console.log("getting data 3 ...");
        getdata(3,()=>{
            console.log("getting data4 ...");
            getdata(4)
        });
    });//when ever we need to pass an argument in our callback then we write an arrow function and inside that arrow function we call the funx=ction(here getdata(2)) with argument.
});//here this arrow function will not get immediately executed.