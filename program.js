var count = 0
var output = document.getElementById('output')
var item = document.getElementsByName('grid-item-63')
function countClicks()
{
    count = count + 1
    output.innerHTML = count
}

const startingMinutes = 1
let time = startingMinutes * 60

const countdownEl = document.getElementById('countdown')

// setInterval(updateCountdown, 1000)

// function updateCountdown() {
//     const minutes = Math.floor(time / 60)
//     let seconds = time % 60
//     seconds = seconds < 10 ? '0' + seconds : seconds

//     countdownEl.innerHTML = `${minutes}:${seconds}`
//     time--
//     time = time < 0 ? 0 : time 
// }
// function redirectPage()
// {
//     window.location="Wyniki.html"
// }
// setTimeout('redirectPage()', time * 1000 + 2000)