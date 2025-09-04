const employee={
    //method 1 to create an function inside an object.
    // calctax:function(){
    //     console.log("the taxx rate is 10% ");
    // }
    //method 2 to create an function inside an object.(this one is preffered )
    calctax(){
        console.log("the tax rate is 10% ");
    }
};

const karanArjun={
    salary:50000,
};

// but if i want that my karanArjun object must also have acess to function calctax() so i have to create employee object a prototype of karanArjun object
// this can be done by writting :
karanArjun.__proto__=employee;
//noew after writing this we can see calcTax() as a function of prototype in karanArjun.
// karanArjun
// {salary: 50000}salary: 50000[[Prototype]]: Objectcalctax: ƒ calctax()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__() 


//let us say we have 5 new employees and we require calacTax() function for all of them then we donot need to write the calcTax function for each of them but we only need to writ:
// object_name.__proto__=employee;
const karanArjun1={
    salary:50000,
};
const karanArjun2={
    salary:50000,
};
const karanArjun3={
    salary:50000,
};
const karanArjun4={
    salary:50000,
};
const karanArjun5={
    salary:50000,
};

karanArjun1.__proto__=employee;
karanArjun2.__proto__=employee;
karanArjun3.__proto__=employee;
karanArjun4.__proto__=employee;
karanArjun5.__proto__=employee;

//whenever an object and its prototype has same named methods then object's method is executed when method is called.