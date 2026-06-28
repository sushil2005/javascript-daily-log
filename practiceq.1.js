//program to calculate the simple interest and displaying the result using alert

var p;
let t;
let r;
let Interest;
p=Number(prompt('enter the amount for which interest to be calculated'));
t=prompt("enter the time ");
r=prompt("enter the rate ");
Interest=p*t*r/100;
alert(Interest);
