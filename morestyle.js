
const GALLERIES = {

  PlaneAccident: ["images/9111.png","images/9112.png","images/9113.png","images/9114.png"],
  Cars: ["images/FAF1.png","images/FAF2.png"],
  Race: ["images/race1.png","images/race2.png","images/race3.png"],
  Ped: ["images/pedo1.png","images/pedo2.png"],
  ICE: ["images/ICE1.png","images/ICE2.png","images/ICE3.png"],
  Down: ["images/down.png","images/FAF2.png"],
  More: ["images/bombi.png"]

};

let currentGallery = [];
let currentIndex = 0;

const start = document.getElementById("start");
const gallery = document.getElementById("gallery");
const slideshow = document.getElementById("slideshow");
const menu = document.getElementById("menu");

/* ================= PRELOAD ALL IMAGES ================= */
function preloadAllImages() {
  Object.values(GALLERIES).forEach(list => {
    list.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  });
}

/* ================= INTRO ================= */
window.onload = () => {
  preloadAllImages(); // 👈 IMPORTANT FIX

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

  showImage(true);
}

/* ================= BACK ================= */
function goHome() {

  gallery.classList.remove("active");

  setTimeout(() => {
    gallery.classList.add("hidden");

    start.classList.remove("hidden");
    start.classList.add("active");

  }, 400);
}

/* ================= SMOOTH SLIDE SWITCH ================= */
function showImage(firstLoad = false) {

  if (!firstLoad) {
    slideshow.classList.remove("slide-in");
    slideshow.classList.add("slide-out");
  }

  setTimeout(() => {

    slideshow.src = currentGallery[currentIndex];

    slideshow.onload = () => {
      slideshow.classList.remove("slide-out");
      slideshow.classList.add("slide-in");
    };

  }, firstLoad ? 0 : 200);
}

/* ================= NAVIGATION ================= */
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

/* ================= RIPPLE ================= */
document.addEventListener("click", (e) => {
  const ripple = document.createElement("span");
  ripple.className = "ripple";

  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";

  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});