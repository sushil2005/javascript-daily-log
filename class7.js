// 1.use input to ask enter two numbers and when you click on the button, the sum is printed in  result box when click button 
ab=()=>{
    let num1=Number (document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    let sum=num1+num2;
    document.getElementById("num3").value = sum;
};
