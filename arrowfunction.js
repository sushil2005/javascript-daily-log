document.write("<h2>32. Arrow Function and this Keyword</h2>");

// 1. Normal Function
function add(a, b) {
    return a + b;
}
document.write("<b>1. Normal Function:</b> " + add(10, 5) + "<br><br>");

// 2. Arrow Function
const multiply = (a, b) => a * b;
document.write("<b>2. Arrow Function:</b> " + multiply(10, 5) + "<br><br>");

// 3. Arrow Function (Single Parameter)
const square = n => n * n;
document.write("<b>3. Square:</b> " + square(6) + "<br><br>");

// 4. Arrow Function (No Parameter)
const hello = () => "Hello World";
document.write("<b>4. No Parameter:</b> " + hello() + "<br><br>");

// 5. 'this' Example
const student = {
    name: "Sushil",
    normalFunction: function () {
        return this.name;
    }
};

document.write("<b>5. this Keyword:</b> " + student.normalFunction() + "<br><br>");