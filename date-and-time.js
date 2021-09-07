/* Date */

let dateBtnShow = document.getElementById("getDate"); /* We look for our button */
let outputDate = document.getElementById("date-id"); /* We look for our output element we can use later */

dateBtnShow.addEventListener("click", () => {         /* Make an arrow function which is listenting for a click event */
    let today = new Date();                           /* We get the whole date */
    let month = today.getMonth() + 1;                 /* We get the month from the previus date method (jan is 0, so we need +1)*/
    let year = today.getFullYear();                   /* Same with year */
    let date = today.getDate();                       /* Same with day */

    if (month < 10) {                                 /* With this its possible to write a zero before month less than 10 - its looks nicer */
        month = "0" + month;
    }

    if (date < 10) {
        date = "0" + date;

    }

    let current_date = `${year}-${month}-${date}`; /* We make a format for displaying */
    outputDate.innerText = current_date; /* Make it to refrest the output element */
});


/* Time */

let timeBtnShow = document.getElementById("getTime");
let outputTime = document.getElementById("time-id");
let box = document.getElementById("timeCheckBox");

timeBtnShow.addEventListener("click", function timeFun() { /* We gave this function a name, so we can use it later */
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let current_time = `${hours}:${minutes}:${seconds}`;
    outputTime.innerText = current_time;
    

    if (box.checked == false) {
        let timeOut = setTimeout(timeFun, 1000) /* We call the timeFun function in every second */
    }
});
