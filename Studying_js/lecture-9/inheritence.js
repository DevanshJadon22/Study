class parent{
     hello(){
        console.log("hello");

    }
}

class childs extends parent{

}

let object=new childs;//here  we have created an abject associated with childs class but we can acess the hello() method of parent class also as childs extends(inherit) parent.