class toyotacar{
    // classes are like blueprint for creating similar objects whenever an object will be created of toyotacar then that object will have both start and stop function inbuild.

    constructor(carname,milage){
        console.log("creating new object. ");
        this.name=carname;
        this.carmilage=milage;
    }

    start(){
        console.log("car starts. ");
    }

    //here there is no need to seperate methods with comma.

    stop(){
        console.log("car stops. ");
    }

    setbrand(brand){
        this.brandName=brand;
    }
}

//creating object of toyotacar
const fortuner=new toyotacar('fortuner',10);//when we create an object then constructor is invoked automatically .
console.log(fortuner);
fortuner.setbrand("toyota");
const lexus=new toyotacar("lexus",12);
console.log(lexus);