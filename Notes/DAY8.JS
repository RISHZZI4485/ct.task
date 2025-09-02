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


//import and export modules
//definition:
//export allows you to make variables,functions,or classes available to other files.

//import allows you to bring those into another file.

//used in modular javascript(ES6+).

// export function ass(a,b){
//     return a + b;
// }
// export const pi = 3.14;

// Main.js

// import {add , pi} from './mathutils.js'

// console.log(add(10, 20)); //30
// console.log(pi); //3.14