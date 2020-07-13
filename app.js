var sec = 0
var min = 0
var msec = 0

var secs = document.getElementById("sec")
var mins = document.getElementById("min")
var msecs = document.getElementById("msec")
var interval;

function timer() {
    msec++
    msecs.innerHTML = msec
    if (msec >= 100) {
        sec++
        secs.innerHTML = sec
        msec = 0
    }
    else if (sec >= 60) {
        min++
        mins.innerHTML = min
        sec = 0
    }
}

function start() {
    interval = setInterval(timer, 10)
    var visible = document.getElementById("start")
    visible.style.visibility = "hidden"
}
function pause() {
    clearInterval(interval)
    var visible = document.getElementById("start")
    visible.style.visibility = "visible"
}
function reset() {
    min = 0
    sec = 0
    msec = 0
    mins.innerHTML = min
    secs.innerHTML = sec
    msecs.innerHTML = msec
    pause()
    var visible = document.getElementById("start")
    visible.style.visibility = "visible"
}


var records = []

function record() {
    var a = min.toString() + ":" + sec.toString() + ":" + msec.toString()
    records.push(a)
    console.log(records)
    let arr = []
    var abc = document.getElementById("abc")
    for (i = 0; i < records.length; i++) {
        records[i]
        arr.push(`<li>${records[i]}</li>`)
    }
    abc.innerHTML = arr
}







