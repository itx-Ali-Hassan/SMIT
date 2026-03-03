const name = "Ali Hassan"
let num1 = 10
let num2 = 10
const output = document.querySelector(".output")
const statement = document.querySelector(".statement")
const footer = document.querySelector("footer")
console.dir(footer)

function alertName() {
    alert(`My Name is ${name}`)
    statement.innerHTML = "alert(`My Name is ${name}`)"
    output.innerHTML = `My Name is ${name}`
    footer.className = "mt-3"
}

function alertNumber() {
    alert(num1)
    statement.innerHTML = "alert(num1)"
    output.innerHTML = num1
    footer.className = "mt-3"
}

function clearOutput() {
    output.innerHTML = ""
    statement.innerHTML = ""
    footer.className = "mt-5"
}

function showVariableName() {
    statement.innerHTML = "let num1 = 10"
    output.innerHTML = "num1"
    footer.className = "mt-3"
}

function camelCaseExample() {
    output.innerHTML = "thisAnCamelCaseExample"
    statement.innerHTML = ""
    footer.className = "mt-4"
}

function sum2Number() {
    statement.innerHTML = "let result = num1 + num2"
    output.innerHTML = num1 + num2
    footer.className = "mt-3"
}

function sub2Number() {
    statement.innerHTML = "let result = num1 - num2"
    output.innerHTML = num1 - num2
    footer.className = "mt-3"
}

function mul2Number() {
    statement.innerHTML = "let result = num1 * num2"
    output.innerHTML = num1 * num2
    footer.className = "mt-3"
}

function divide2Number() {
    statement.innerHTML = "let result = num1 / num2"
    output.innerHTML = num1 / num2
    footer.className = "mt-3"
}

function calculateNumber() {
    statement.innerHTML = "let result = 10 * (20 * 30 - (40 + 70) + 20 * 30)"
    output.innerHTML = 10 * (20 * 30 - (40 + 70) + 20 * 30)
    footer.className = "mt-3"
}