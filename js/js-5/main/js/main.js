const input = document.getElementById("text")
const output = document.getElementById("output")
const num = 25.12345
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

function roundNumber() {
    output.innerHTML = Math.round(num)
}

function ceilNumber() {
    output.innerHTML = Math.ceil(num)
}

function floorNumber() {
    output.innerHTML = Math.floor(num)
}

function randomNumber() {
    output.innerHTML = Math.random()
}

function throwDice() {
    output.innerHTML = Math.round(Math.random() * 5) + 1
}

function strongPassword() {
    let password = null
    function passwordGenerator() {

    }
    while (password.length < 12) {
        passwordGenerator()
    }
}

function controlLength() {
    let name = prompt("Enter username ( min 3 letter )")
    while (name.length != 3 || name.length > 3) {
        name = prompt("Enter username ( min 3 letter )")
    }
}

function calculateGst() {
    let basePrice = Number(prompt("Enter the base Price"))
    let gstRate = Number(prompt("Enter the Rate of GST"))
    const gstAmount = (basePrice * gstRate) / 100
    const totalPrice = basePrice + gstAmount
    output.innerHTML = totalPrice
}

function noIdea() {
    alert("I have no idea what should I write here")
}