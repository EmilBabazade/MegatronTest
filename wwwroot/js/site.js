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
                    handleError(data);
                    return;
                }
                handleSuccess(data);
            }
        });
    });
});

function handleError(data) {
    $('.user_details').attr('style', 'display: none !important');
    $('#error-text').text(data.resultMessage);
    $('#error').show();
    setTimeout(() => $('#error').hide(), 5000);
}

function handleSuccess(data) {
    $('#success').show();
    setTimeout(() => $('#success').hide(), 5000);
    showUserDetails(data);
}

function showUserDetails(data) {
    $('.user_details').attr('style', 'display: block !important');
    $("#entityId").text(data.entityId);
    $("#firstName").text(data.firstName);
    $("#lastName").text(data.lastName);
    $("#company").text(data.company);
    $("#address").text(data.address);
    $("#city").text(data.city);
    $("#country").text(data.country);
    $("#zip").text(data.zip);
    $("#phone").text(data.phone);
    $("#mobile").text(data.mobile);
    $("#email").text(data.email);
    $("#emailConfirm").text(data.emailConfirm);
    $("#mobileConfirm").text(data.mobileConfirm);
    $("#countryID").text(data.countryID);
    $("#status").text(data.status);
    $("#lid").text(data.lid);
    $("#fTPHost").text(data.fTPHost);
    $("#fTPPort").text(data.fTPPort);
}