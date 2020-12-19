/*=======================================
- https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit
- http://keycode.info/a
=======================================*/

/*=======================================
## Get Elements 
=======================================*/

const keys = document.querySelectorAll('.key'); 

/*=======================================
## Build Functions 
=======================================*/

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop running 
  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add('playing'); 
}


function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //skip if not transform
  this.classList.remove('playing'); 
}

/*=======================================
## Hook Event Listeners
=======================================*/

keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 

window.addEventListener('keydown', playSound );