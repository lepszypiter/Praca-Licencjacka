var result = 0
var buttonsArray = document.getElementsByClassName('Button')
for (var i = 0; i < buttonsArray.length; i++) {
    var button = buttonsArray[i]
    button.addEventListener('click', function(event){
        result++;
    })
}
console.log(result)

var count = 0
var output = document.getElementById('output')
function countClicks()
{
    count = count + 1
    output.innerHTML = count
}