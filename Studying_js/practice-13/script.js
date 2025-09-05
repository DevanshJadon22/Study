//u are creating an website for ur college and u have to create a class named user having 2 properties name and email along with a method viewdata() to view the data of website.
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    // name;
    // email;
    viewData(){
        console.log("the name is :",this.name);
        console.log("the email id is :",this.email);
    }
}

let student1=new user("dev","jad@gmail.com");
let student2=new user("ansh","dev@gmail.com");