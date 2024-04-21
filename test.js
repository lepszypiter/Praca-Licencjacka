var count = 0
var output = document.getElementById('output')
var expectedHorizontal = 0
var expectedVertical = 0
output.innerHTML = count


function countClicks(elem)
{
    console.log("countClicks elem" + elem);
    checkTest(elem)
    output.innerHTML = count
    console.log("countClicks count " + count);

}

const startingMinutes = 1
let time = startingMinutes * 60

 countdownEl = document.getElementById('countdown')
 const minutes = Math.floor(time / 60)
    let seconds = time % 60 +1
    seconds = seconds < 10 ? '0' + seconds : seconds
 countdownEl.innerHTML = `${minutes}:${seconds}`

function checkTest(clickedId)
{
    console.log("checkTest expectedHorizontal " + expectedHorizontal);
    console.log("checkTest expectedVertical " + expectedVertical);
    console.log("checkTest clickedId " + clickedId);
    var target = "Button-" + (expectedHorizontal + expectedVertical * 8)
    console.log("checkTest target " + target);
    if (clickedId == target)
    {
        console.log("checkTest OK ");
        count = count + 1
        nextTest()
    }

}
function nextTest()
{
    lightsOff()
    expectedHorizontal = getRandomIntInclusive(1, 7)
    console.log("randHorizontal " + expectedHorizontal);
    var itemHorizontal = document.getElementById('light-horizontal-' + expectedHorizontal)   
    itemHorizontal.classList.add('light-on')
    expectedVertical = getRandomIntInclusive(1, 7)
    console.log("randVertical " + expectedVertical);
    var itemVertical = document.getElementById('light-vertical-' + expectedVertical)
    itemVertical.classList.add('light-on')
}
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}
function lightsOff()
{

    const lights = document.getElementsByClassName('light-on')
    console.log("lightsOff " + lights.length);
    for (let i = 0; i < lights.length;) {
        lights[i].classList.remove('light-on')
      } 
}

nextTest()
  
setInterval(updateCountdown, 1000)

function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds

    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--
    time = time < 0 ? 0 : time 
}
function redirectPage()
{
    localStorage.setItem("result", count);
    localStorage.setItem("id", crypto.randomUUID());

    window.location="result.html"
}
setTimeout('redirectPage()', time * 1000 + 2000)

