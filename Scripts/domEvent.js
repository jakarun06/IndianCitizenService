$(document).ready(function () {

    $('.voteImg').hover(function () {
        $(this).css('opacity', '0.7');
    }, function () {
        $(this).css('opacity', '1');
    })

    $('#goLive').click(function () {
        window.location.href = liveMapUrl;
    });

    $('#userMap').click(function () {
        window.location.href = userMapUrl;
    });
});