const name = "Ali Hassan"
const cities = ["faisalabad", "islamabad", "lahore", 'burewala', 'karachi', 'sheikupura', 'kashmir']
const output = document.querySelector("#output")
const statement = document.querySelector(".statement")
const footer = document.querySelector("footer")

function simpleAlert() {
    alert(`My name is ${name}`)
    output.innerHTML = `alert("My name is ${name}")`
}

function myPrint() {
    window.print()
    output.innerHTML = "window.print()"
    footer.style.marginTop = "157px"
}

function printCities() {
    cities.forEach(city => {
        output.innerHTML += `${city} <br>` 
    });
    footer.style.marginTop = "80px"
    output.classList = "p-0"
}

function addMyCity() {
    let city = prompt("Enter your city")
    cities.push(city)
    alert("your city is added")
}

function noIdea() {
    alert("I have no idea what should I write here")
}