class person{
    constructor(name){
        // console.log("enter parent constructor.");
        this.spicies="homosapiens";
        this.name=name;
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
    constructor(name){
        // console.log("enter the child constructor ");
        super(name);//using super keyword here as to avoid error (we have to call this super to invoke parent class 's constructor ) we are also passing parameter to the parent constructor if do not pass parameter to parent class constructor then in object of child class the name property will show undefined.
        // console.log("exit the child constructor ");
    }
    work(){
        //let us say an engineer first eat then work . so we need to call eat() method in child class 's  method (work()) then this can only be done using super.eat() or using super keyword.
        super.eat();//right syntax
        console.log("Solve problems, build something");
    }
}

let engobj=new engineer("Devansh");