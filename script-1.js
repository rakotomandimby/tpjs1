var buttons = document.querySelectorAll("input[type='button']")
var imput = document.getElementById('input')
var button_reset = document.querySelector("input[type='reset']")
buttons.forEach(function(elem){
    elem.addEventListener('click',function(e){
        e.stopPropagation()
        var value = elem.getAttribute('value')
        input.value += value
    })
})
button_reset.addEventListener('click', function(e){
    e.stopPropagation()
    input.value = ''
})
