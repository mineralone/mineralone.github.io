const infoRead = document.querySelector('.info-read');
const infoText = infoRead.querySelector('.info-read__text');
const infoButton = infoRead.querySelector('.info-read__button');

infoButton.addEventListener('click', function() {
    let infoTextHide = infoRead.querySelector('.info-read__text_hide');
    let infoFloatingShow = infoRead.querySelector('.floating-button_show');
    if (infoTextHide && infoFloatingShow) {
        infoButton.classList.add('floating-button_hide');
        infoButton.classList.remove('floating-button_show');
        infoText.classList.add('info-read__text_show');
        infoText.classList.remove('info-read__text_hide');
    }
    else {
        infoButton.classList.remove('floating-button_hide');
        infoButton.classList.add('floating-button_show');
        infoText.classList.remove('info-read__text_show');
        infoText.classList.add('info-read__text_hide');
    }
});


