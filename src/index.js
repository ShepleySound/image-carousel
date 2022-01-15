import Carousel from './carousel-class';
import imgOne from './imgs/img1.jpg';
import imgTwo from './imgs/img2.jpg';
import imgThree from './imgs/img3.jpg';
import imgFour from './imgs/img4.jpg';
import imgFive from './imgs/img5.jpg';

const images = [imgOne, imgTwo, imgThree, imgFour, imgFive];

const carousel = new Carousel(images);
const circleArray = carousel.circles.childNodes;
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
let position = 0;
let x = 0;
const maxX = -60 * (images.length - 2);
const filledStyle = '#43b6cabd';

circleArray[position].style.backgroundColor = filledStyle;

const clearAllFill = () => {
  circleArray.forEach((circle) => {
    circle.style.backgroundColor = 'transparent';
  });
};

leftArrow.addEventListener('click', () => {
  if (x < 0) {
    carousel.slider.style.transform = `translateX(${(x += 60)}vw)`;
    position -= 1;
    clearAllFill();
    circleArray[position].style.backgroundColor = filledStyle;
  }
});

rightArrow.addEventListener('click', () => {
  if (x >= maxX) {
    carousel.slider.style.transform = `translateX(${(x -= 60)}vw)`;
    position += 1;
    clearAllFill();
    circleArray[position].style.backgroundColor = filledStyle;
  }
});

circleArray.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    clearAllFill();
    circle.style.backgroundColor = filledStyle;
    x = index * -60;
    position = index;
    carousel.slider.style.transform = `translateX(${x}vw)`;
  });
});
