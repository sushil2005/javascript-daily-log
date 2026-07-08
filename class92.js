//onclick
//ondbclick
//onmousenter

//onkeypress
//let inp=document.querySelector("input")
//inp.addEventListener("keydown",()=>{
   // inp.addEventListener("keyup",()=>{
        //inp.addEventListener("keypress",()=>{ 
    //let i=document.querySelector("input").value;
    //document.body.style.backgroundColor=inp.value;
//})

let btn=document.querySelector("button");
let mode="light";
let b=document.querySelector("body");
btn.addEventListener("click",()=>{
    if(localStorage.getItem("theme")=="dark"){
         
   b.classList.add("dark");

if(b.classList.contains("dark"))
{
    
    localStorage.setItem("theme","dark");
}
else{
    localStorage.setItem("theme","light");
}

   










//let p=document.querySelector("p")
//p.classList.remove("a");
//p.classList.add("a");


























//mousein=()=>
//{
    //let d=document.querySelector("div");
    //d.style.backgroundColor="red";
//}
