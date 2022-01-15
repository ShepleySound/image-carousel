import './carousel-style.css';

class Carousel {
  constructor(imgArray) {
    this.imgArray = imgArray;
    this.circles = document.querySelector('#circles');
    this.slider = document.querySelector('#carousel');
    this.circles.innerHTML = '';
    this.slider.innerHTML = '';
    this.imgArray.forEach((image) => {
      if (image) {
        const newImage = new Image();
        newImage.src = image;
        this.slider.append(newImage);

        const newCircle = document.createElement('i');
        this.circles.append(newCircle);
      }
    });
    this.maxX = -60 * (imgArray.length - 2);
    this.position = 0;
  }
}

export default Carousel;
