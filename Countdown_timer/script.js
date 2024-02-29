const days = document.getElementById("days")
const hours = document.getElementById("hr")
const mins = document.getElementById("mins")
const secs = document.getElementById("secs")




const myBirthday ="6 october 2024";

const countdown =()=>{
    const myBirthdayDate = new Date(myBirthday);
    const currentDate = new Date();
    var diff = (myBirthdayDate - currentDate)

//it divides the total difference in milliseconds by the number of milliseconds in a day
    const day = Math.floor(diff/(1000*60*60*24));
//cal the rem when the total diff in millisecs is divided by the no of millisecs in a day den it divides this rem by the num of millisecs in an hr 
    const hrs = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
    //cal the rem when the total diff in millisecs is divided by the no of millisecs in an hr den it divides this rem by the num of millisecs in an min
    const minutes = Math.floor(diff%(1000*60*60)/(1000*60));
    ////cal the rem when the total diff in millisecs is divided by the no of millisecs in an min
    const seconds = Math.floor(diff%(1000*60)/1000);

   days.innerHTML = day
    hours.innerHTML = formatTime(hrs)
    mins.innerHTML = formatTime(minutes)
    secs.innerHTML =  formatTime(seconds)

    

    }

    const formatTime = (time)=>{
        return time < 10 ? `0${time}`: time;

//console.log(day,hr,min,sec)

}
countdown()
setInterval(countdown, 1000)