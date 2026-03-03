const input = document.getElementById("text")
const output = document.getElementById("output")
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


function todayDate(myInput) {
    let date = new Date()
    if (myInput === undefined) {
        const statement = document.getElementById("date")
        statement.innerHTML = date
    } else {
        return date[myInput]()
    }
}

function todayName() {
    let day = todayDate('getDay') - 1
    output.innerHTML = `Today Day is ${days[day]}`
}

function greedUser() {
    alert("Hello User")
}
// when is my next birthday
function nextBirthday(month, day) {
    // Get today's date
    let today = new Date();
    let currentYear = today.getFullYear();

    // Create a date object for birthday this year
    let birthday = new Date(currentYear, month - 1, day);

    // If birthday has already passed this year, set it to next year
    if (birthday < today) {
        birthday.setFullYear(currentYear + 1);
    }

    // Calculate days remaining until birthday
    let daysRemaining = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));

    // Display the result
    output.innerHTML = `Your next birthday is in ${daysRemaining} days`;
}

function call() {
    let date = new Date(input.value)
    let month = date.getMonth()
    let day = date.getDay()
    nextBirthday(month, day)
}

function calculateTax(myInput) {
    let income = Number(prompt("Enter the Price of item"))
    let taxRate = Number(prompt("Enter the amount of tax"))
    const tax = (income / 100) * taxRate;
    if (myInput === undefined) {
        output.innerHTML = `The Total Tax is ${tax}`
    } else {
        return income + tax;
    }
}

function totalPrice() {
    let total = calculateTax(1)
    output.innerHTML = `The Total is ${total}`
}

function noIdea() {
    alert("I have no idea what should I write here")
}
todayDate()