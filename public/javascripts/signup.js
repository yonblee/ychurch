var length = getById("length")
var chars = getById("chars")
var password = getById("password")
var toggler = getById("toggler")
var send = getById("send")
var code = getById("code")
var submit = getById("submit")
var specialChars = ["!","@","#","$","%","^","&","*","(",")","_","-","+","|","<",">","[","]","{","}"];

toggler.addEventListener("click", function (evt) {
    if(password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
})

password.addEventListener("focus", function() {
        show("validator")
        
})

password.addEventListener("blur", function() {
        hide("validator")
})

password.addEventListener("input", function () {
    let values = password.value
    if(password.value.length >= 8) {
        length.classList.add("success")
    }
    if(password.value.length < 8) {
        length.classList.remove("success")
    }
    
    specialChars.forEach((char)=>{
        if(values.includes(char)) {
            chars.classList.add("success")
     }
    })
    
})

code.addEventListener("focus", function() {
    show("hint")
})
code.addEventListener("blur", function() {
    hide("hint")
})
code.addEventListener("input", function () {
    if(code.value.length === 6){
        submit.disabled = false 
    }
})

send.addEventListener("click", function () {
    send.disabled = true
    let count = 59, timer = setInterval(() => {
        send.textContent = `Resend Code: ${count-- - 1}s`
        if(count == 0) {
            clearInterval(timer)
            send.textContent = `Resend Code`
            send.disabled = false
        }
    }, 1000);
})


function getById(id) {
return document.getElementById(id)
}

function hide(elemId) {
    let elem = getById(elemId)
    if(elem.classList.contains("show")) {
        elem.classList.remove("show")
        elem.classList.add("hide")
    }
}

function show(elemId) {
    let elem = getById(elemId)
    if(elem.classList.contains("hide")) {
        elem.classList.remove("hide")
        elem.classList.add("show")
    }
}
