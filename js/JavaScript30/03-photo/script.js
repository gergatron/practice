/*=======================================
- https://github.com/wesbos/JavaScript30/tree/master/03%20-%20CSS%20Variables
=======================================*/

/*=======================================
## Get Elements 
=======================================*/

const inputs = document.querySelectorAll('.controls input');

/*=======================================
## Build Functions 
=======================================*/

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


/*=======================================
## Hook Event Listeners || Callbacks
=======================================*/

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));