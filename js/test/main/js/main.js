const userPlaceHolder = document.getElementById("userPlaceHolder")
const userFullName = document.getElementById("fullName")
const userEmail = document.getElementById("email")
const userPassword = document.getElementById("password")
const users = []

function register() {
    let user = { fullName: userFullName.value.toLowerCase(), email: userEmail.value, password: userPassword.value }
    users.push(user)
    localStorage.setItem("registerUser", JSON.stringify(users))
}

function logIn() {
    let registerUsers = JSON.parse(localStorage.getItem("registerUser"))
    registerUsers.forEach(user => {
        if (user.email === userEmail || user.password === userPassword) {
            console.log("LogIN")
        }
    });
}