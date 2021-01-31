const jobAssurence=function(name,age,gender,experience){
    this.name=name;
    this.age=parseInt(age);
    this.isEligible=function(){
        if(this.age>=18)
            return true;
            else return false;
        
    }
    this.exp=parseInt(experience);
    this.isExperienced=function(){
        if(this.exp>=4)
            return true;
            else return false;
        
    }
    this.gender=gender;
    this.gen=function(){
        if(this.gender==="M")
        return "Mr. "+this.name;
        else return "Mrs. "+this.name;
    }
    this.getStatus=function(){
        if(this.isEligible() === true && this.isExperienced()=== true)
        return "Congratulation " + this.gen() + ", "+"your job is assured"
        else return "Sorry "+this.gen()+", "+"we can not assure your job"
    }

}
module.exports=jobAssurence;
