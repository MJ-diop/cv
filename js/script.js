$(document).ready(function () {
    $('.navbar a, footer a').on('click', function (event) {
        event.preventDefault();
        let hash = this.hash;
        $('body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            window.location.hash = hash;
        })
    });
});