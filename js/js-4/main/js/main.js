const name = "Ali Hassan"
const cities = ["faisalabad", "islamabad", "lahore", 'burewala', 'karachi', 'sheikupura', 'kashmir']
const input = document.getElementById("text")
const output = document.getElementById("output")

function lowerCase(myInput) {
    output.innerHTML = input.value.toLowerCase()
    if (myInput === undefined) {
        return
    } else {
        return myInput.toLowerCase()
    }
}

function upperCase() {
    output.innerHTML = input.value.toUpperCase()
}

function capitalize() {
    let myInput = lowerCase(input.value)
    output.className = " text-capitalize "
    output.innerHTML = myInput
}

function printCities() {
    output.className = " text-capitalize "
    cities.forEach(city => {
        output.innerHTML += `${city} <br>`
    });
}

function checkCity(myInput) {
    const found = cities.find(city => city === input.value.toLowerCase());
    const founded = found ? true : false;
    if (myInput === undefined) {
        if (founded) {
            alert("Your city is in the list")
        } else {
            alert("Your city is not in the list")
        }
    }else{
        return founded
    }
}

function addYourCity() {
    const myInput = input.value.toLowerCase()
    const founded = checkCity(myInput)
    if (founded) {
        alert(`Your city ${myInput} is in the list`)
    } else {
        cities.push(input.value)
        alert(`Your city ${myInput} is added`)
    }
}

function noIdea(){
    alert("I have no idea what should i write here")
}