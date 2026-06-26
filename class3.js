let color = prompt("enter any color");
b = document.getElementById("a");
switch(color) {
  case 'red':
    b.style.backgroundColor = "red";
    break;
  case 'green':
    b.style.backgroundColor = "green";
    break;
  case 'yellow':
    b.style.backgroundColor = "yellow";
    break;
  default:
    alert("invalid choice");
    break;
}
