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
                console.log(data)
            }
        });
    });
});