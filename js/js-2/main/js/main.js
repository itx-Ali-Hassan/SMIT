const output = document.querySelector(".output")
const statement = document.querySelector(".statement")

function nameFromUser() {
  let userName = prompt("Enter your Name")
  statement.innerHTML = `let userName=prompt("Enter your Name")`
  output.innerHTML = userName
}

function concatenation() {
  let result = "My Name is " + "Ali Hassan"
  statement.innerHTML = 'let result = "My Name is " + "Ali Hassan"'
  output.innerHTML = result
}

function comparisonOperators() {
  let ul = `<ul>
        <li>Equal : ( == )</li>
        <li>Strict Equal : ( === )</li>
        <li>Not Equal : ( != )</li>
        <li>Strict Not Equal : ( !== )</li>
        <li>Greater Than : ( &gt; )</li>
        <li>Greater Than or Equal To : ( &gt;= )</li>
        <li>less Than or Equal To : ( &lt;= )</li>
        <li>less Than : ( &lt; )</li>
    </ul>`
  statement.innerHTML = ul
  output.innerHTML = ul
}

function ifElseIf() {
  let result = `let age = 18;<br>
<br>
if (age >= 18) {<br>
  console.log("You are an adult.");<br>
} else {<br>
  console.log("You are a minor.");<br>
}`
  statement.innerHTML = result
  output.innerHTML = result
}


function nestedIfElse() {
  let result = `if (username === 'admin') {<br>
  if (password === '1234') {<br>
    isAuthenticated = true;<br>
    console.log('Authentication successful.');<br>
  } else {<br>
    console.log('Invalid password.');<br>
  }<br>
} else {<br>
  console.log('Invalid username.');<br>
}`
  statement.innerHTML = result
  output.innerHTML = result
}

function login() {
  let userName = prompt("Enter the user Name").toLocaleLowerCase()
  let userPassword = prompt("Enter the user Password")
  if (userName == 'ali hassan' && userPassword == '123') {
    alert("Login")
    output.innerHTML = 'Login'
  } else {
    alert("Invalid Username or Password")
    output.innerHTML = 'Invalid Username or Password'
  }
  statement.innerHTML = `let userName = prompt("Enter the user Name").toLocaleLowerCase()
  let userPassword = prompt("Enter the user Password")
  if (userName == 'ali hassan' && userPassword == '123') {
    alert("Login")
  }else{
    alert("Invalid Username or Password")
  }`
}

function noIdea() {
  let noIdea = 'I have no idea what should i write here'
  statement.innerHTML = noIdea
  output.innerHTML = noIdea
}