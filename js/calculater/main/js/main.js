const display = document.getElementById("display")
const operators = ['/', '+', '-', '*', '=']

function addToInput(myInput) {
    display.value += myInput
}

function clearInput() {
    display.value = ""
}

function ShowResult() {
    try {
        display.value = eval(display.value)
    } catch (err) {
        display.value = "Error"
    }
}

document.addEventListener("keypress", (event) => {
    if (!isNaN(event.key)) {
        addToInput(event.key)
    }else if(operators.includes(event.key)){
        if(event.key === operators[4]){
            ShowResult()
        }else{
            addToInput(event.key)
        }
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key === 'Backspace'){
        display.value = display.value.slice(0, -1)
    }
})