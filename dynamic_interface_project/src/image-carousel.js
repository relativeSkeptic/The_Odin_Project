let currentImage = 0;

function carouselRight() {
    if(currentImage === 2) {
        currentImage = 0;
    }
    else {
        currentImage += 1;
    }
    updateImage();
}

function carouselLeft() {
    if(currentImage === 0) {
        currentImage = 2;
    }
    else {
        currentImage -= 1;
    }
    updateImage();
}

function updateImage() {
    
}

export { carouselLeft, carouselRight }