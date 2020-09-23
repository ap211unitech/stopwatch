let minute = Number(document.getElementById("timerminute").innerText);
let second = Number(document.getElementById("timersecond").innerText);
let milisecond = Number(document.getElementById("timermilisecond").innerText);
let startbtn = document.getElementById("startbtn");
let stopbtn = document.getElementById("stopbtn");
let stopper;
let count = 0;

// let p=startbtn.addEventListener("click", () => {
//     setInterval(() => {
//         second += 1;
//         document.getElementById("timersecond").children[0].innerHTML = second;

//     }, 1000)
// });

// let startclock = setInterval(startitnow, 10);

// function startitnow() {
//     milisecond += 1;
//     if (milisecond == 100) {
//         milisecond = 0;
//         second += 1;
//         if (second == 60) {
//             second = 0;
//             minute += 1;
//             document.getElementById("timerminute").children[0].innerHTML = minute;
//         }
//         document.getElementById("timersecond").children[0].innerHTML = second;
//     }
//     document.getElementById("timermilisecond").children[0].innerText = milisecond;
// }

// startbtn.addEventListener("click", startclock);
// console.log(startclock)
// stopbtn.addEventListener("click", stopit);


let startthetimer = () => {
    if (count == 0) {
        count = count + 1;
        // console.log(Date())
        let startitnow = setInterval(() => {
            milisecond += 1;
            if (milisecond == 100) {
                milisecond = 0;
                second += 1;
                if (second == 60) {
                    second = 0;
                    minute += 1;
                }
            }
            document.getElementById("timersecond").children[0].innerHTML = String(second).length >= 2 ? second : "0" + second;
            document.getElementById("timermilisecond").children[0].innerHTML = String(milisecond).length >= 2 ? milisecond : "0" + milisecond;
            document.getElementById("timerminute").children[0].innerHTML = String(minute).length >= 2 ? minute : "0" + minute;
            stopper = startitnow;

        }, 10);
    }
}
function stopit() {
    clearInterval(stopper);
    count = 0;
}

function reset() {
    stopit();
    // document.getElementById("timerminute").innerHTML = `<h1>00</h1>`;
    // document.getElementById("timermilisecond").innerHTML = `<h1>00</h1>`;
    // document.getElementById("timersecond").innerHTML = `<h1>00</h1>`;
    minute = 0;
    second = 0;
    milisecond = 0;
    document.getElementById("timerminute").children[0].innerHTML = minute + "0";
    document.getElementById("timersecond").children[0].innerHTML = second + "0";
    document.getElementById("timermilisecond").children[0].innerHTML = milisecond + "0";


}