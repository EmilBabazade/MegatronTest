$(document).ready(function () {
    $("#loginForm").submit(function (e) {
        e.preventDefault();
        var email = $("#email").val();
        var password = $("#password").val();
        $.ajax({
            url: "/Home/Login",
            type: "post",
            contentType: 'application/json',
            data: JSON.stringify({
                "email": email,
                "password": password
            }),
            success: function (data) {
                if (data.resultCode && data.resultCode == -1) {
                    $('#error-text').text(data.resultMessage);
                    $('#error').show();
                    setTimeout(() => $('#error').hide(), 5000);
                    return;
                }
                $('#success').show();
                // TODO: redirect to user details page
            }
        });
    });
});