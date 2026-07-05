let num = Number(prompt("Enter a number:"));

document.write("<h3>Multiplication Table of " + num + "</h3>");

for (let i = 1; i <= 10; i++) {
    document.write(num + " × " + i + " = " + (num * i) + "<br>");
}