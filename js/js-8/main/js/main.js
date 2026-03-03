const output = document.getElementById("output")
const imgUrl = './main/src/death.jpg'
const users = []

function showImage() {
    output.innerHTML = ""
    let img = document.createElement("img")
    img.src = imgUrl
    img.height = 500
    output.appendChild(img)
}

function addUser() {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const time = document.getElementById("dateTime").value
    let user = { firstName, lastName, email, time }
    users.push(user)
}

function printUserConsol() {
    output.innerHTML = ""
    users.forEach(user => {
        console.log(user)
    });
}

function noIdea() {
    alert("I have no idea what should I write here")
}