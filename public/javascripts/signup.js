var length = document.getElementById("length")
var chars = document.getElementById("chars")
var validator = document.getElementById("validator")

var password = document.getElementById("password")
var toggler = document.getElementById("toggler")

var specialChars = ["!","@","#","$","%","^","&","*"];

toggler.addEventListener("click", function (evt) {
    if(password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
})

password.addEventListener("focus", function() {
    if(validator.classList.contains("hide")) {
        validator.classList.remove("hide")
        validator.classList.add("show")
    }
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

