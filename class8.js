ab=()=>
{
    let t=document.getElementById("a");
    if(t.type=="password")
    {
        t.type="text";
    }
    else
    {
        t.type="password";
    }
}