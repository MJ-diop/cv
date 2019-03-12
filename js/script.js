$(document).ready(function () {
    $('.navbar a, footer a').on('click', function (event) {
        event.preventDefault();
        let hash = this.hash;
        $('body,html').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            window.location.hash = hash;
        })
    });


    $('#contact-form').submit(function (e) {
        e.preventDefault();
        $('.comment').empty();
        var postdata = $('#contact-form').serialize();

        // AJAX 
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function (response) {
                if (response.isSuccess) {
                    $('#contact-form').append('<p class="thank-you">Votre message a bien été envoyer. Merci de m\'avoir contacté :)</p>');
                    $('#contact-form')[0].reset();
                } else {
                    $('#firstname + .comment').html(response.firstnameError);
                    $('#name + .comment').html(response.nameError);
                    $('#email + .comment').html(response.emailError);
                    $('#phone + .comment').html(response.phoneError);
                    $('#message + .comment').html(response.messageError);
                }
            }
        });
    });
});