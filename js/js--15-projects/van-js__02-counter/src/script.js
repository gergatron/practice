/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/john-smilga/javascript-basic-projects/tree/master/2-counter
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

// initialize count
let count = 0; 

/*=======================================
## Get Elements 
=======================================*/
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn');

/*=======================================
## Build Functions 
=======================================*/
const controls = (e) => {
    const styles = (e.currentTarget.classList);
    if(styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')){
      count++;
    } else {
      count = 0; 
    }
    
    if(count > 0) {
      value.style.color = 'green'; 
    }
    if(count < 0) {
      value.style.color = 'red'
    }
    if(count === 0) {
      value.style.color = '#222'; 
    }
    value.textContent = count; 
  };               

/*=======================================
## Hook Event Listeners
=======================================*/

btns.forEach(btn => btn.addEventListener('click', controls)); 
