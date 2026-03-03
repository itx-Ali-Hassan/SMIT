const output = document.getElementById("output")

function goToUrl(myInput) {
    if (myInput === 'google')
        window.location.href = "https://google.com"
    if (myInput === "replace")
        window.location.replace("https://github.com/itx-ali-hassan")
}

function popupFnc(myInput) {
    if (myInput === 'open')
        window.open("", "_blank", "width=800, height=600")
    if (myInput === "assign")
        window.open('https://www.google.com/', "_blank", "width=800, height=600")
}

function noIdea() {
    alert("I have no idea what should I write here")
}