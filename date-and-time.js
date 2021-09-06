let dateBtnShow = document.getElementById("getDate");
let outputDate = document.getElementById("date-id");

dateBtnShow.addEventListener("click", () => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    let current_date = `${year}-${month}-${date}`;
    outputDate.innerText = current_date;
});



let timeBtnShow = document.getElementById("getTime");
let outputTime = document.getElementById("time-id");

timeBtnShow.addEventListener("click", function timeFun() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let current_time = `${hours}:${minutes}:${seconds}`;
    outputTime.innerText = current_time;
    
    let timeOut = setTimeout(timeFun, 1000)
});