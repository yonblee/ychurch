var email = document.getElementById("email")
var send = document.getElementById("send")
var api_url = "http://localhost:5500"
var xml = XMLHttpRequest

send.addEventListener("click", (ev)=>{
   let address = email.value
   if(address) {
    console.log("email is not emapty")
   } else {
    email.insertAdjacentHTML("afterend",  `<small class="error">Please provide an email</small>`)
   }
})
