//SLIDER
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
//CITY LIST
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
//FORM VALIDATION
const formValidation = () => {
    let name = $('#fname').val();
    let namemsg = $('#mname');
    let phone = $('#fphone').val();
    let phonemsg = $('#mphone');
    let email = $('#femail').val();
    let emailmsg = $('#memail');
    let br = 0;
    if (!(/^[a-zA-Z" "]+$/.test(name)) || name.length == 0 || !name.includes(" ")) {
        namemsg.html("Neispravno ime");
    }
    else {
        namemsg.html(" ");
        br++;
    }
    if (!(/^[0-9"+"]+$/.test(phone)) || phone.length == 0 || phone.length != 12 || !phone.startsWith('+382')) {
        phonemsg.html("Neispravan broj");
    }
    else {
        phonemsg.html(" ");
        br++;
    }
    if (!(/^[a-zA-Z"@._"]+$/.test(email)) || email.length == 0 || !email.includes("@") || !email.includes(".com")) {
        emailmsg.html("Neispravan email");
    }
    else {
        emailmsg.html(" ");
        br++;
    }
    if (br == 3) {
        return true;
    }
    else {
        return false;
    }
};