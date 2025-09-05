class person{
    constructor(){
        console.log("enter parent constructor.");
        this.spicies="homosapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("nothing work");
    }
}
class engineer extends person{
    constructor(branch){
        console.log("enter the child constructor ");
        super();//using super keyword here as to avoid error (we have to call this super to invoke parent class 's constructor )
        this.branch=branch;
        console.log("exit the child constructor ");
    }
    work(){
        console.log("Solve problems, build something");
    }
}

let engobj=new engineer("chemical engineer");

//when we create an object then an object(child class's constructor) constructor is invoked automatically but before we leave/exit the child class constuctor we have to use super(); keyword even before using 'this' keyword.