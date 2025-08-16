let x=BigInt("123")
// creating object in js.
const student={
    fullName:"rahul kumar",
    age:20,
    cgpa:8.2,
    isPass:true
};
// printing the age of student (object)
console.log(student.age);//method 1
console.log(student["age"]);//method 2

// incrementing the age of student by 1and assigning the new age(oldage+1) to the age variable associated with student(object)
student["age"]=student["age"]+1;//here we are acessing the age variable associated with student object by writing student["age"]

// printing the incremented age
console.log(student.age);

// here we have decleared the whole student object as const but we can change the values associated with keys of student object(it is valid and it is not changing the object as a whole.)