$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        // Action to perform when bottom is reached
        alert("You've reached the bottom!");
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        // Action to perform when near the bottom
        alert("You're near the bottom!");
    }
});
