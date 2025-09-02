let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours)
let minits=currenttime.getMinutes();
console.log(minits);
let Day=currenttime.getDay();
console.log(Day)

class Exam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    }
}
let result=new Exam("Rohith");

class Bank{
    constructor(initalamount=0){
        this._balance=initalamount;
    }
    get balance(){
        return this._balance;
    }
    set balance(amountdeposit){
        if(amountdeposit>0){
            this._balance +=amountdeposit;
        }
    }
}
let add=new Bank(10);     
console.log(add)  
add.balance=200
console.log(add)
console.log(add.balance);

class Addition{
    static Math(a,b){
        return a+b
    }
}
console.log(Addition.Math(4,4))
