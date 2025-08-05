//let globalVar=" I am global"
//function Say(){
   // console.let(globelVar);
//}
//Say()
//console.log(globalVar)
//function scope
//This scope means that the variables are only accessible in the function in which they are declared
//function Say(){
    //let name="Javascript"
    //console.log("Hey Function Scope");
    //console.log("Within the func"+name);
//}
//Say()
//Block scope
//The block scope of a variable means that the variable is accessible within the block that is between the curly braces
//function Voting(age){
    //if(age>=18){
       // const iscloudy=true;
        //var israining=true;
        //console.log("eligible")
//console.log(iscloudy);
   // }
   // console.log(israining);
//}
//Voting(18)
//Local scope
//Same as function or block scope depending on context
//callback function
//function text(){
   // console.log("message");
//}
//function send(callback){
    //console.log("message sended");
   // setInterval(callback,1000);
//}
//send(text);
let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count <5){
        Interval();
    }
}
Interval();
