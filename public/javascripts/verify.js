var api_url = "http://localhost:5500"

$("#email").on("blur", function () {
   let email = $("#email").val();
   if(email) {
      $.ajax({
         url: "/auth/email",
         type: "POST",
         dataType: "json",
         data: {email},
         complete: () => {console.log("process complete.")},
         success: (data) => {
            if(data.email !== null) {
               $(`<small class="error bold">Email already have an account.</small>`).insertAfter("#email")
            } 
         },
         error: (err) => {console.log(err)}
      })
   } else {
      $(`<small class="error bold">Email cannot be blank.</small>`).insertAfter("#email")
   }
})