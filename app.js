// All the UI variables

const projectItem = document.querySelectorAll('.project-item'),
  // grab the lightbox container
  lightBox = document.querySelector('.lightbox-container'),
  // get the lightbox item
  lightBoxItem = document.querySelector('.lightbox-item');
//get all the images
images = document.querySelectorAll('.project-img');

let imageList = [],
  imageCounter = 0;

images.forEach((image) => {
  imageList.push(image.src);
  // console.log(imageList);
});

// Add a click event to all the project item
projectItem.forEach((item) => {
  item.addEventListener('click', function (e) {
    const image = e.target.src;
    console.log(image);
    // change the background img property of the lightbox item
    lightBoxItem.style.backgroundImage = `url(${image})`;

    // add the .show class to the selected image
    lightBox.classList.add('show');
    // get the array index number for the imaeg that was selected
    imageCounter = imageList.indexOf(image);
  });
});
// Adding the controler for the left and right buttons
// for the left button
const btnleft = document.querySelector('.btnLeft');

btnleft.addEventListener('click', function () {
  imageCounter--;
  if (imageCounter < 0) {
    imageCounter = imageList.length - 1;
  }
  lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
});
// for the right button

const btnRight = document.querySelector('.btnRight');

btnRight.addEventListener('click', function () {
  imageCounter++;
  if (imageCounter >= imageList.length) {
    imageCounter = 0;
    console.log(imageCounter);
  }
  lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
});

// adding the close button

let closeBtn = document.querySelector('.lightbox-close');

closeBtn.addEventListener('click', function () {
  lightBox.classList.remove('show');
});
