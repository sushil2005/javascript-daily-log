function watch()
{
    let time=new Date();
    hr=time.getHours();
    min=time.getMinutes();
    sec=time.getSeconds();
    meri="AM";
    if(hr>=12)
    {
        meri="PM";
        hr=hr-12;
    }
    if(hr==0)
    {
        hr=12;
    }
    if(min<10)
    {
        min="0"+min;
    }
    if(sec<10)
    {
        sec="0"+sec;
    }
    let ghadi=hr+":"+min+":"+sec+meri;
    document.getElementById("clock").innerHTML=ghadi;
}
setInterval(watch,1000);