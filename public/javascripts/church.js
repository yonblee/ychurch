$(function () {

    if ($("#one").is(":visible")) {
        $("#prev").hide()
    } 
    
    $("#two").hide()
    $("#three").hide()
    $("#next").on("click", function () {

        $("#prev").show()

        if ($("#one").is(":visible")) {
        $("#one").hide()
        $("#two").slideDown()

        } else if($("#two").is(":visible")) {
        $("#two").hide()
        $("#three").slideDown() 
        $("#next").hide()
        }

    });

    $("#prev").on("click", function () {
        if ($("#two").is(":visible")) {
        $("#two").hide()
        $("#one").show().slideDown()
        $("#next").show()

        } else if($("#three").is(":visible")) {
        $("#three").hide()
        $("#two").show().slideDown() 
        $("#next").show()
        }
    });

})