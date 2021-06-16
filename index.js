var timerColor = document.getElementById("timer");
var t_mm = document.getElementById("hm");
var t_ss = document.getElementById("hs");
var sessionSub = document.getElementById("ssub");
var sessionAdd = document.getElementById("sadd");
var breakSub = document.getElementById("bsub");
var breakAdd = document.getElementById("badd");
var startBtn = document.getElementById("start");
var resetbtn = document.getElementById("reset");
var sessionTime = document.getElementById("session-time");
var breakTime = document.getElementById("break-time");
var heading = document.getElementById("heading");
var stime=20;
var btime=5;
var sessionInterval, breakInterval, timer, session=0;

function sessionTimer(){
    timer = stime*60;
    session+=1;
    timerColor.setAttribute("style","color:steelblue");
    heading.innerHTML = "Session "+session;
    sessionInterval = setInterval(function()
    {
        timer--;
        if(parseInt(timer/60)<10)
            mm = '0'+parseInt(timer/60)+':';
        else
            mm = parseInt(timer/60)+':';
        if(timer%60<10)
            ss = '0'+timer%60;
        else
            ss = timer%60;
        t_mm.innerHTML = mm;
        if(ss>=0){
            t_ss.innerHTML = ss;  
        }else{
            clearInterval(sessionInterval);
            breakTimer();
        }
    },1000)
}

function breakTimer(){
    timer = btime*60;
    timerColor.setAttribute("style","color:red");
    heading.innerHTML = "Break !";
    breakInterval = setInterval(function()
    {
        timer--;
        if(parseInt(timer/60)<10)
            mm = '0'+parseInt(timer/60)+':';
        else
            mm = parseInt(timer/60)+':';
        if(timer%60<10)
            ss = '0'+timer%60;
        else
            ss = timer%60;
        t_mm.innerHTML = mm;
        if(ss>=0){
            t_ss.innerHTML = ss;  
        }else{
            clearInterval(breakInterval);
            sessionTimer();
        }
    },1000)
}

startBtn.addEventListener("click",function(){
    sessionTimer();
    sessionAdd.disabled=true;
    sessionSub.disabled=true;
    breakAdd.disabled=true;
    breakSub.disabled=true;
});

resetbtn.addEventListener("click",function(){
    clearInterval(sessionInterval);
    clearInterval(breakInterval);
    session=0;
    timerColor.setAttribute("style","color:steelblue");
    heading.innerHTML = "Session "+session;
    sessionAdd.disabled=false;
    sessionSub.disabled=false;
    breakAdd.disabled=false;
    breakSub.disabled=false;
    if(stime<10)
        t_mm.innerHTML = '0' + stime +':';
    else
        t_mm.innerHTML = stime +':';
    t_ss.innerHTML = '00';
    
})

sessionSub.addEventListener("click",function(){
    if(stime){
        stime-=1;
        if(stime<10){
            sessionTime.innerHTML = '0' + stime+' min';
        }else {
            sessionTime.innerHTML = stime+' min';
        }
    }
})

sessionAdd.addEventListener("click",function(){
    stime+=1;
    if(stime<10){
        sessionTime.innerHTML = '0' + stime+' min';
    }else {
        sessionTime.innerHTML = stime+' min';
    }
})

breakSub.addEventListener("click",function(){
    if(btime){
        btime-=1;
        if(btime<10){
            breakTime.innerHTML = '0' + btime+' min';
        }else {
            breakTime.innerHTML = btime+' min';
        }
    }
})

breakAdd.addEventListener("click",function(){
    btime+=1;
    if(btime<10){
        breakTime.innerHTML = '0' + btime+' min';
    }else {
        breakTime.innerHTML = btime+' min';
    }
})
