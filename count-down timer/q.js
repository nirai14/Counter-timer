const daysA=document.getElementById("days")
const hoursA=document.getElementById("hours")
const minsA=document.getElementById("mins")
const secondsA=document.getElementById("seconds")


const newYears="09 oct 2023";
 function countdown(){
    const newYearDate=new Date(newYears);
    const currentDate=new Date();
    const totalSeconds=(newYearDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const mins=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60
    console.log(days,hours,mins,seconds);

    daysA.innerHTML=days;
    hoursA.innerHTML=hours;
    minsA.innerHTML=mins;
    secondsA.innerHTML=seconds;
 }

 countdown();
 setInterval(countdown,1000);