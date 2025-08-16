let marks=prompt('enter the marks of student. ');
let grade;
if (marks>=90 && marks<=100) {
    grade='A';
    // console.log('Grade  is :', grade);
}
else if (marks>=70 && marks<=89) {
    grade='B';
    // console.log('Grade  is :', grade);
}
else if (marks>=60 && marks<=69) {
    grade='C';
    // console.log('Grade  is :', grade);
}else if (marks>=50 && marks<=59) {
    grade='D';
    // console.log('Grade  is :', grade);
}
else{
    grade='F';
    // console.log('Grade is :',grade);
}
console.log("According to your marks your grade is: ",grade);