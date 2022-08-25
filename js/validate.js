$(document).ready(function() {
    $('.btn').on('click', validate)

    const validateEmail = (email) => {
        const re = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return re.test(email);
    }

    const sendForm = () => {
        $('.error').css({color: "#54E6AF"});
        $('.error').text('Email sending').fadeIn();
    }

    const showError = () => {
        $('.error').css({color: "#FB3E3E"});
        $('.error').text('Oops! Please check your email').fadeIn();
    }

    function validate(e) {
        e.preventDefault();

        let email = $('.email').val();

        if (validateEmail(email)) {
            $('.error').fadeOut();
            sendForm();
        } else {
            $('.error').fadeOut();
            showError();
        }
    }
})