var Person =require('./person.js');
const Biodetails = new Person(["avinash","avi"],18,"M","learning");
let biodetails = Biodetails.Bio();
let greetdetails = Biodetails.Greeting();
module.exports=Biodetails;

    

