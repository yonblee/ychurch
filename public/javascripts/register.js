var switcher = document.getElementById("switcher");
var contact = document.getElementById("contact");

window.onload = function onload() {
  console.log("0880" + Math.floor(Math.random() * 899999 + 100000))
  // console.log(Math.floor(100000 * Math.random() * 900000))
}


switcher.addEventListener("click", (evt) => {
  let type = contact.type;
  if (type == "text") {
    contact.type = "email";
    contact.placeholder = "Enter Email";
    evt.target.innerText = "Use Phone";
  } else {
    contact.type = "text";
    contact.placeholder = "Enter Phone";
    evt.target.innerText = "Use Email";
    contact.value = "";
  }
});
