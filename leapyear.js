let year = prompt("Enter a year:");

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    document.write(year + " is a Leap Year");
} else {
    document.write(year + " is Not a Leap Year");
}