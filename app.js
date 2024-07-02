const UTCtime = document.getElementById('timeDisplay');

setInterval(()=>{
    const hrs = new Date().getUTCHours();
    const min = new Date().getUTCMinutes();
    const sec = new Date().getUTCSeconds();
    const fulltime = `${hrs.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
    UTCtime.innerHTML = fulltime;
},1000)

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const UCTday = document.getElementById('dayDisplay')
setInterval(()=>{
    const dayNum = new Date().getUTCDay();
    UCTday.innerHTML = days[dayNum];
},1000)