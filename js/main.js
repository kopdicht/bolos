function Init(options) {

    var date = new Date(options.date);
    var now = new Date();
    var diff = (date.getTime() / 1000) - (now.getTime() / 1000);

    var clock = $(options.clockSelector).FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'pt'
    });

    var audio = $("#bolos")[0];
    $(".sound-controller").on('mouseenter tap', function() {
        audio.play();
    });

}