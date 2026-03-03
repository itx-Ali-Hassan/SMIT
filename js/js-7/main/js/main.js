const input = document.getElementById("text")
const output = document.getElementById("output")

function keepAskingTheName() {
    let myInput = null
    while (myInput !== 'q') {
        myInput = prompt("Enter your name ( q to quick )").toLocaleLowerCase()
    }
    output.innerHTML = `while (myInput !== 'q') {<br>
        myInput = prompt("Enter your name ( q to quick )").toLocaleLowerCase()<br>
    }`
}

function switchStatement() {
    output.innerHTML = `switch (key) { <br>
        case value:<br>
            // statement<br>
            break;<br>
        default:<br>
        // statement<br>
            break;<br>
    }`
}

function ifElseStatement() {
    output.innerHTML = `if (condition) {<br>
        //statement<br>
    } else {<br>
        //statement<br>
    }`
}