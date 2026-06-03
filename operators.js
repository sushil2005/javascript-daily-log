// simple operators
let a=5;
let b=67;
let c=a+b;
let d=a+b+c;
console.log(c);
console.log(d);
console.log(5!==5);//false
console.log(!5===5);//false


let isSunny=true;
let isWarm=false;
console.log(isSunny&&isWarm);//false because both conditions are not true
console.log(isSunny||isWarm);//true because at least one condition is true

let messsage="hello";
console.log(typeof message);//o/p:string
let num1=7;
console.log(typeof num1);//o/p:number
let isInteresting=false;
console.log(typeof isInteresting);//o/p:boolean

console.log(5===5);//true 
console.log("4"===4);//false because of different data types where "4" is treated as a string and 4 is treated as a number
console.log(5!==5);//false because both values are equal