let Data="this is secret data";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    // name;
    // email;
    viewData(){
        console.log(Data);
    }
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    edit_data(){
        Data="new data";
    }
}

let student1=new user("dev","jad@gmail.com");
let student2=new user("ansh","dev@gmail.com");

let admin1=new Admin("Admin1","admin@email.com");