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

function nextTest()
{
    var randHorizontal = getRandomIntInclusive(1, 7)
    console.log("randHorizontal " + randHorizontal);
    var itemHorizontal = document.getElementById('light-horizontal-' + randHorizontal)   
    itemHorizontal.classList.add('light-on')
    var randVertical = getRandomIntInclusive(1, 7)
    console.log("randVertical " + randVertical);
    var itemVertical = document.getElementById('light-vertical-' + randVertical)
    itemVertical.classList.add('light-on')
}
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}
function lightsOff()
{

    var lights = document.getElementsByClassName('light-on')
    console.log("lightsOff " + lights.length);
    lights.forEach(element => {
        element.classList.remove('light-on')
    });
}
  
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