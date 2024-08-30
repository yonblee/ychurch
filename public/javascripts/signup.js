var length = getById("length")
var chars = getById("chars")
var password = getById("password")
var toggler = getById("toggler")
var send = getById("send")
var code = getById("code")
var submit = getById("submit")
var fullname = getById("fullname")
var specialChars = ["!","@","#","$","%","^","&","*","(",")","_","-","+","|","<",">","[","]","{","}"];

var openEye = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"   width="20"  height="18" ><path d="M41.4 23.71a.9.9 0 0 1 0 .58c-.63 1.92-2.2 4.89-4.82 7.51A17.35 17.35 0 0 1 24 37.11c-5.42 0-9.55-2.28-12.58-5.3a20.44 20.44 0 0 1-4.82-7.52.9.9 0 0 1 0-.58c.63-1.92 2.2-4.89 4.82-7.51A17.35 17.35 0 0 1 24 10.89c5.42 0 9.55 2.28 12.58 5.3a20.44 20.44 0 0 1 4.82 7.52ZM24 41c13.83 0 20.82-11.7 21.96-16.81a.85.85 0 0 0 0-.38C44.82 18.71 37.83 7 24 7S3.18 18.7 2.04 23.81a.85.85 0 0 0 0 .38C3.18 29.29 10.17 41 24 41Z" fill="#161823"></path><path d="M24 27.21a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42Zm0 4.29a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" fill="#161823"></path></svg>`

var closeEye = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"   width="20"  height="18" ><path d="M38.88 41.7a1 1 0 0 0 1.41 0l1.42-1.4a1 1 0 0 0 0-1.42l-3.86-3.86a24.57 24.57 0 0 0 6.27-9.69 1 1 0 0 0 0-.66C41 15.8 32.66 9 23 9c-3.27 0-6.35.73-9.12 2.05L9.12 6.29a1 1 0 0 0-1.41 0L6.29 7.71a1 1 0 0 0 0 1.41l32.59 32.59Zm-22-27.66A17.8 17.8 0 0 1 23 13c12.75 0 17 12 17 12s-1.38 3.9-4.93 7.25l-4.54-4.55A7.99 7.99 0 0 0 23 17c-.95 0-1.86.16-2.7.47l-3.43-3.43ZM1.87 24.67a24.64 24.64 0 0 1 5.8-9.23l2.77 2.78C7.25 21.46 6 25 6 25s4.25 12 17 12a18 18 0 0 0 5.42-.8l3.05 3.05A21.2 21.2 0 0 1 23 41c-9.83 0-17.93-6.63-21.13-15.67a1 1 0 0 1 0-.66Z" fill="#161823"></path><path d="M15 25c0-.68.08-1.35.24-1.98l9.74 9.73A8.02 8.02 0 0 1 15 25Z" fill="#161823"></path></svg>`

import { Eye20Regular } from "@fluentui/react-icons";


window.addEventListener("DOMContentLoaded", function () {
    toggler.innerHTML = Eye20Regular;
})

fullname.addEventListener("input", function () {
    onlyAlpha(fullname)
})
code.addEventListener("input", function () {
    onlyNum(code)
})

toggler.addEventListener("click", function (evt) {
    if(password.type === "password") {
        password.type = "text"
        toggler.innerHTML = closeEye
    } else {
        password.type = "password"
        toggler.innerHTML = openEye
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
    //add count down to button
    let count = 60, timer = setInterval(() => {
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

function onlyAlpha(elem) {
    let regex = /[^a-zA-Z. \s]+/;
    elem.value = elem.value.replace(regex, '')

}
function onlyNum(elem) {
    let regex = /[^0-9\s]+/;
    elem.value = elem.value.replace(regex, '')

}

