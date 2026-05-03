const GALLERIES = {

  PlaneAccident: [
    "images/9111.png",
    "images/9112.png",
    "images/9113.png",
    "images/9114.png"
  ],

  Cars: [
    "images/FAF1.png",
    "images/FAF2.png"
  ],

  Race: [
    "images/race1.png",
    "images/race2.png",
    "images/race3.png"
  ],

  Ped: [
    "images/pedo1.png",
    "images/pedo2.png"
  ],

  ICE: [
    "images/ICE1.png",
    "images/ICE2.png",
    "images/ICE3.png"
  ],

  Down: [
    "images/down.png",
    "images/FAF2.png",
    "images/ICE3.png"
  ],

  More: [
    "images/bombi.png"
  ]

};

let currentGallery = GALLERIES.PlaneAccident;
let currentIndex = 0;

const slideshow = document.getElementById("slideshow");

function showImage(index) {
  slideshow.style.opacity = 0;

  setTimeout(() => {
    slideshow.src = currentGallery[index];
    slideshow.style.opacity = 1;
  }, 150);
}

function nextImage() {
  currentIndex++;

  if (currentIndex >= currentGallery.length) {
    currentIndex = 0;
  }

  showImage(currentIndex);
}

function prevImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = currentGallery.length - 1;
  }

  showImage(currentIndex);
}

function changeGallery(name) {
  currentGallery = GALLERIES[name];
  currentIndex = 0;
  showImage(currentIndex);
}

// START
showImage(currentIndex);