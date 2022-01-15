import Carousel from './carousel-class';
import imgOne from './imgs/fog-rider.jpg';
import imgTwo from './imgs/frozen-tower.jpg';
import imgThree from './imgs/latte.jpg';
import imgFour from './imgs/library.jpg';
import imgFive from './imgs/looking-out.jpg';
import imgSix from './imgs/mountain-top.jpg';
import imgSeven from './imgs/pier-walk.jpg';
import imgEight from './imgs/winter-river.jpg';
import Dropdown from './dropdown/dropdown-class';

const allImages = [
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
  imgSeven,
  imgEight,
];

const images = [imgTwo, imgThree, imgFour];

let carousel = new Carousel(images);
const dropdown = new Dropdown('bottom-menu');

const circleArray = carousel.circles.childNodes;
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
let x = 0;
const filledStyle = '#43b6cabd';
circleArray[carousel.position].style.backgroundColor = filledStyle;

const clearAllFill = () => {
  circleArray.forEach((circle) => {
    circle.style.backgroundColor = 'transparent';
  });
};

const refreshCarousel = (imageArray) => {
  const oldPosition = carousel.position;
  const newCarousel = new Carousel(imageArray);
  newCarousel.position = oldPosition;
  return newCarousel;
};

const refreshImages = (allImages, images) => {
  const sortArray = [];
  images.forEach((image) => {
    const mainIndex = allImages.indexOf(image);
    sortArray.push(mainIndex);
  });
  images.sort(function (a, b) {
    return sortArray[images.indexOf(a)] - sortArray[images.indexOf(b)];
  });
};

const refreshCircles = () => {
  circleArray.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      clearAllFill();
      circle.style.backgroundColor = filledStyle;
      x = index * -60;
      carousel.position = index;
      carousel.slider.style.transform = `translateX(${x}vw)`;
    });
  });
};

dropdown.items.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (!item.classList.contains('active')) {
      item.classList.add('active');
      images.splice(index, 0, allImages[index]);
      refreshImages(allImages, images);
      const mainIndex = images.indexOf(allImages[index]);
      if (carousel.position >= mainIndex) {
        carousel.position += 1;
      }
    } else {
      if (images.length > 1) {
        item.classList.remove('active');
        const mainIndex = images.indexOf(allImages[index]);
        images.splice(mainIndex, 1);
        if (
          carousel.position >= mainIndex &&
          carousel.position &&
          images.length
        ) {
          carousel.position -= 1;
        }
      }
    }
    carousel = refreshCarousel(images);
    circleArray[carousel.position].style.backgroundColor = filledStyle;
    x = carousel.position * -60;
    carousel.slider.style.transform = `translateX(${x}vw)`;
    refreshCircles();
  });
});

const initList = (allImages, images) => {
  images.forEach((image) => {
    const mainIndex = allImages.indexOf(image);
    dropdown.items[mainIndex].classList.toggle('active');
  });
};

initList(allImages, images);

leftArrow.addEventListener('click', () => {
  if (x < 0) {
    carousel.slider.style.transform = `translateX(${(x += 60)}vw)`;
    carousel.position -= 1;
    clearAllFill();
    circleArray[carousel.position].style.backgroundColor = filledStyle;
  }
});

rightArrow.addEventListener('click', () => {
  if (x >= carousel.maxX) {
    carousel.slider.style.transform = `translateX(${(x -= 60)}vw)`;
    carousel.position += 1;
    clearAllFill();
    circleArray[carousel.position].style.backgroundColor = filledStyle;
  }
});
