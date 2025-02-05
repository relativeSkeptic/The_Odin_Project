let currentImage = 0;

function carouselRight() {
    if(currentImage === 2) {
        currentImage = 0;
    }
    else {
        currentImage += 1;
    }
    updateImage(currentImage);
}

function carouselLeft() {
    if(currentImage === 0) {
        currentImage = 2;
    }
    else {
        currentImage -= 1;
    }
    updateImage(currentImage);
}

function updateImage(num) {
    let slides = document.getElementsByClassName('slides');
    let carousel = document.getElementsByClassName('dot');
    for (let i = 0; i < slides.length; i++) {
        if (i === num) {
            slides[i].style.display = 'flex';
            carousel[i].style.textDecoration = 'underline';
        }
        else {
            slides[i].style.display = 'none';
            carousel[i].style.textDecoration = 'none';
        }
    }
}

export { carouselLeft, carouselRight, updateImage }