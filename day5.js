// let number = 8765343291;
// let value = /^[1-9]\d{9}$/;

// if (value.test(number.toString())) {
//     console.log("correct");    
// } else {
//     console.log("incorrect");
// }

let text = "hey hello";
let match =/\b\w+\b/gi;
console.log(match ? text : 0);
console.log(text.length);
