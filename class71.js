//askthe color from  user and when user click on the button, the background color of the page is changed to that color      
ac=()=>{
    let color=document.getElementById("color").value;
    document.body.style.backgroundColor=color;
}
setInterval(ac);