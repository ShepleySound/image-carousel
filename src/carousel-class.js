import './style.css';

class Carousel {
  constructor(imgArray) {
    this.imgArray = imgArray;
    const circles = document.querySelector('#circles');
    const carousel = document.querySelector('#carousel');
    this.imgArray.forEach((image) => {
      const newImage = new Image();
      newImage.src = image;
      carousel.append(newImage);

      const newCircle = document.createElement('i');
      circles.append(newCircle);
    });
    return {
      slider: carousel,
      circles: circles,
    };
  }
}

export default Carousel;
