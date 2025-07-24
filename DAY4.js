//ARRAY
//let names=new Array("sai","sam");
//console.log(number[2]);
//console.log(names.length);
//filter()-it filtered the result arguments
//let number=[1,2,3,4,5];
// result=number.filter(number=>number[0]);
// console.log(result);
//slice-delete the element based on index value
//splice-Changes the orginal array by adding/removing items at a specific index
//let number=[1,2,3,4,5];
//number.splice(1,3,"heyy");
//console.log(number)
//object
 /*details={
    name:"@mahi",
    totalmark:"90",
    //nested obj
    subject:{
        dbms:"98",
        java:"99"
    },
    avg:function(){
        let sum=parseInt(this.subject.dbms)+parseInt(this.subject.java);
        return sum;
    }
}
console.log(details.totalmark)
console.log(details["name"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.avg());*/
// const person={
//     name:"Rishi",
//     age:18,
//     city:"CBE"
// }
// const {name,age,city}=person;
// console.log(name);
// console.log(age);
// console.log(city);
const person=["Rishi",18," web developer"];
const[name,age,designation]=person;
console.log(name+" "+age+" "+designation);

