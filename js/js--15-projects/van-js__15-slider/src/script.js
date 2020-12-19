/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/john-smilga/javascript-basic-projects/blob/master/15-slider
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

/*===============================
## Get Elements 
=================================*/

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});



/*==============================
## Build Functions 
=================================*/

const carousel= () => {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";


/*=============================
## Hook Event Listeners
================================*/

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});