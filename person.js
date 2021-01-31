class Person{
    constructor(Name=[],Age,Gender,Interests){
        this.Name=Name;
        this.Age =Age;
        this.Gender=Gender;
        this.Interests=Interests;
    }
    Bio(){
       return this.Name[0]+" "+this.Name[1]+" is "+this.Age+" "+"years old."+" "+"They like "+this.Interests+".";
    }
   Greeting(){
       return "Hi! I'm"+" "+this.Name[0]+" "+this.Name[1]+".";
   }
}
module.exports=Person;
