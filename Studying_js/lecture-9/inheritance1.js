class person{
    constructor(){
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
    work(){
        console.log("Solve problems, build something");
    }
}
//if i create an object of engineer class and try to call work method then it will print "solve problem,build something" on console as if there is a method with same name in parent and child class then the method in clhid class gets more priority.
class doctor extends person{
    work(){
        console.log("treat the patients. ");
    }
}
let devanshobj=new engineer;//here the constructor of parent class is also invoked when ever we make an object of child class 
//here when we create an devanshobj of engineer class then we can see that this object(devanshobj) will have a property spicies ="Homosapiens" .