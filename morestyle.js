const GALLERIES = {

  PlaneAccident: ["images/9111.png","images/9112.png","images/9113.png","images/9114.png"],
  Cars: ["images/FAF1.png","images/FAF2.png"],
  Race: ["images/race1.png","images/race2.png","images/race3.png"],
  Ped: ["images/pedo1.png","images/pedo2.png"],
  ICE: ["images/ICE1.png","images/ICE2.png","images/ICE3.png"],
  Down: ["images/down.png","images/FAF2.png","images/ICE3.png"],
  More: ["images/bombi.png"]

};

let currentGallery = [];
let currentIndex = 0;

const start = document.getElementById("start");
const gallery = document.getElementById("gallery");
const menu = document.getElementById("menu");
const slideshow = document.getElementById("slideshow");

/* ================= START SEQUENCE ================= */
window.onload = () => {
  setTimeout(() => {
    menu.classList.add("show");
  }, 1200);
};

/* ================= OPEN GALLERY ================= */
function openGallery(name) {

  currentGallery = GALLERIES[name];
  currentIndex = 0;

  start.classList.remove("active");
  start.classList.add("hidden");

  gallery.classList.remove("hidden");

  setTimeout(() => {
    gallery.classList.add("active");
  }, 50);

  showImage();
}

/* ================= BACK HOME ================= */
function goHome() {

  gallery.classList.remove("active");

  setTimeout(() => {
    gallery.classList.add("hidden");

    start.classList.remove("hidden");

    setTimeout(() => {
      start.classList.add("active");
      menu.classList.add("show");
    }, 50);

  }, 400);

}

/* ================= IMAGE CONTROL ================= */
function showImage() {
  slideshow.style.opacity = 0.2;
  slideshow.src = currentGallery[currentIndex];

  slideshow.onload = () => {
    slideshow.style.opacity = 1;
  };
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= currentGallery.length) currentIndex = 0;
  showImage();
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = currentGallery.length - 1;
  showImage();
}