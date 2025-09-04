//direct way of creating an object in js .INjs w have different way of creating object.
const student={
    //properties.
    fullname:"Devansh Jadon",
    Marks: 92.2,
    //creating methods for student object
    //here we can also write arrow function as method .
    printMarks:function(){
        console.log("Marks: ",this.Marks);
        //here this means the object itself (i.e. this.Marks=student.Marks) only.
    },
    //here the student object has both properties and method(function) associated with it.
};
// let array=['mango','apple','banana'];
// undefined
// array
// (3) ['mango', 'apple', 'banana']
// 0
// : 
// "mango"
// 1
// : 
// "apple"
// 2
// : 
// "banana"
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)
// array.push("litchi")
// 4
// array
// (4) ['mango', 'apple', 'banana', 'litchi']
// 0
// : 
// "mango"
// 1
// : 
// "apple"
// 2
// : 
// "banana"
// 3
// : 
// "litchi"
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)
//here we are able to use some methods by default with array due to prototype object inside array object.