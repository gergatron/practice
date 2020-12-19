/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/wesbos/JavaScript30/tree/master/24%20-%20Sticky%20Nav
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*=======================================
## Get Elements 
=======================================*/

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop; 

/*=======================================
## Build Functions 
=======================================*/

function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px'; 
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0; 
    document.body.classList.remove('fixed-nav'); 
  }
}

/*=======================================
## Hook Event Listeners
=======================================*/

window.addEventListener('scroll', fixNav);