/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/wesbos/JavaScript30/tree/master/27%20-%20Click%20and%20Drag
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*=======================================
## Get Elements 
=======================================*/
const slider = document.querySelector('.items');
let isDown = false; 
let startX; 
let scrollLeft;

/*=======================================
## Build Functions 
=======================================*/


/*=======================================
## Hook Event Listeners
=======================================*/

slider.addEventListener('mousedown', (e) => {
  isDown = true; 
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft; 
  scrollLeft = slider.scrollLeft; 
});

slider.addEventListener('mouseleave', () => {
  isDown = false; 
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false; 
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return; // stop fn 
  e.preventDefault(); 
  const x = e.pageX - slider.offsetLeft; 
  const walk = (x - startX) * 3; 
  slider.scrollLeft = scrollLeft - walk; 
});