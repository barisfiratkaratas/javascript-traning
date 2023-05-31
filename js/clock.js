const getName = prompt("Adınızı Giriniz.")
let userName = document.querySelector("#myName")
userName.innerHTML= getName

document.querySelector("myName")

function showTime(){
    let date=new Date();
    let clock=document.querySelector("#myClock");
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    hours = ("0" + hours).slice(-2);
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    let dayName = days[date.getDay()];
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    clock.innerHTML=`${hours}:${minutes}:${seconds} ${dayName}`;
}
setInterval(showTime,50)