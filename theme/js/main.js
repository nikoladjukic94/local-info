$(document).ready(() => {
    $("#content-slider").lightSlider({
        loop: true,
        item: 1,
        auto: 3,
        pause: 5000,
        controls: false,
        keyPress: true
    });
});
$(document).ready(() => {
    const x = $('#city-list');
    const y = $('#show-cities');
    var z = true;
    y.click(() => {
        if (z) {
            x.show('slow');
            z = false;
        }
        else {
            x.hide('slow');
            z = true;
        }
    });
});