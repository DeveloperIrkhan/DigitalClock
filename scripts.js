const clock = () => {
    var hr = document.getElementById("hours");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    var period = document.getElementById("period");


    var hours = new Date().getHours()>= 10 ?  new Date().getHours() : "0"+ new Date().getHours();
    var minutes = new Date().getMinutes() >= 10 ?  new Date().getMinutes() : "0"+ new Date().getMinutes();
    var seconds = new Date().getSeconds() >= 10 ?  new Date().getSeconds() : "0"+ new Date().getSeconds();
    var interval = hours >= 12 ? "PM" : "AM";

    hr.innerText = hours;
    min.innerText = minutes;
    sec.innerText = seconds;
    period.innerText = interval;
};
setInterval(() => {
    clock();
}, 1000);
    