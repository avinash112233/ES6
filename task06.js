var Person = require("./person.js");


class Teacher extends Person{
    constructor(Name=[],Age,Gender,Interests,Subject){
        super(Name,Age,Gender,Interests);
        this.Subject=Subject;
    
    
    }
    Greeting(){
        if(this.Gender=="M")
        var Prefix= "Mr. ";
        else var Prefix= "Mrs. ";
        return"Hello,"+" "+"My name is "+Prefix +this.Name[1]+", "+"and I teach"+" "+this.Subject+".";
    }

} 








class Student extends Person{
    constructor(Name=[],Age,Gender,Interests){
        super(Name,Age,Gender,Interests)
    }
    Greeting(){
        return "Yo! I\'m"+" "+this.Name[0]+".";
    }
    
    
}
let student = new Student(["avinash","avi"],21,"F","sleeping");
let teacher = new Teacher(["ramesh","ram"],21,"M","sleeping","science");
module.exports ={
    ParentClass:Person,
    ChildTeacherClass:Teacher,
    ChildStudentClass:Student,
    TeacherInstance:teacher,
    StudentInstance:student
}
