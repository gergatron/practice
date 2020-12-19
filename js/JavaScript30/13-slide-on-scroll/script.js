/*=======================================
https://github.com/wesbos/JavaScript30/tree/master/13%20-%20Slide%20in%20on%20Scroll
=======================================*/
// ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ // 
// ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ // 
// ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ // 
/*=======================================
## Utility Functions 
=======================================*/

function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

/*=======================================
## Get Elements 
=======================================*/

const sliderImages = document.querySelectorAll('.slide-in'); 

/*=======================================
## Build Functions 
=======================================*/

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // half way through image 
    const slideInAt = (window.scrollY + window.innerHeight) - 
          sliderImage.height / 2;
    // bottom of image
    const imageBottom = sliderImage.offsetTop + sliderImage.height; 
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active'); 
    } else {
      sliderImage.classList.remove('active'); 
    }
  });
}

/*=======================================
## Hook Event Listeners
=======================================*/

window.addEventListener('scroll', debounce(checkSlide));