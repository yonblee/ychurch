var switcher = document.getElementById("switcher");
var contact = document.getElementById("contact");

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
