/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/john-smilga/javascript-basic-projects/tree/master/9-video
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 
// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
video.pause(); video.play(); window.addEventListener("load", loader);
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 

/*===============================
## Get Elements 
=================================*/
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");
/*==============================
## Build Functions 
=================================*/

const slide = () => {
  if(!btn.classList.contains('slide')){
    btn.classList.add('slide');
    video.pause();
  } else {
    btn.classList.remove('slide');
    video.play();
  }
};

const loader = () => {
  preloader.classList.add("hide-preloader"); 
};

/*=============================
## Hook Event Listeners
================================*/

btn.addEventListener("click", slide);
window.addEventListener("load", loader);