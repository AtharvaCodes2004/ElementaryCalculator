const input = document.getElementById("input")

function appendToDisplay(val){
    input.value += val
}
function clr(){
    input.value = ""
}
function backSpace(){
    input.value = input.value.slice(0, -1)
}
function calculate(){
    try{
        input.value = eval(input.value)
    }
    catch(error){
        input.value = error
    }
}