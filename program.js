var count = 0
var output = document.getElementById('output')
var item = document.getElementsByName('grid-item-63')
function countClicks()
{
    count = count + item
    output.innerHTML = count
}