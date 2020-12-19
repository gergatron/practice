/* ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ // 
https://github.com/wesbos/JavaScript30/tree/master/22%20-%20Follow%20Along%20Link%20Highlighter
++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ ++ -- __ == ** ~~ // */

/*=======================================
## Get Elements 
=======================================*/

const triggers = document.querySelectorAll('a'); 
const highlight = document.createElement('span');
highlight.classList.add('highlight'); 
document.body.append(highlight); 

/*=======================================
## Build Functions 
=======================================*/

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords); 
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY, 
    left: linkCoords.left + window.scrollX
  }
  
  highlight.style.width = `${coords.width}px`; 
  highlight.style.height = `${coords.height}px`; 
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`; 
}

/*=======================================
## Hook Event Listeners
=======================================*/

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));