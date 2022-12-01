
function time(){
    let date= new Date();
    let hrs= date.getHours();
    let min=date.getMinutes();
    let sec =date.getSeconds();
    let m=document.getElementById('m');

    if(hrs>=12)
    m.innerHTML="PM";
    else
    m.innerHTML="AM";
    if(hrs>12)
    hrs-=12;
    if(hrs===0){
    document.getElementById('hour').innerHTML='12';
    m.innerHTML="AM";
    }
    else
    document.getElementById('hour').innerHTML=hrs;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
}    
document.querySelector("button").onclick=()=>{
    let btn=document.querySelector(".button");
    btn.style.display = "none";
    setInterval(time,10);
}