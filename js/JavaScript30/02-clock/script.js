/*=======================================
- https://github.com/wesbos/JavaScript30/tree/master/02%20-%20JS%20and%20CSS%20Clock
=======================================*/

/*=======================================
## Get Elements 
=======================================*/

const secondHand = document.querySelector('.hand--sec'); 
const minuteHand = document.querySelector('.hand--min'); 
const hourHand = document.querySelector('.hand--hour'); 


/*=======================================
## Build Functions 
=======================================*/

const setDate = () => {
  const now = new Date(); 
  
  const seconds = now.getSeconds(); 
  const secondsDegrees = ((seconds / 60) * 360); 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
   
  
  const mins = now.getMinutes(); 
  const minsDegrees = ((mins / 60) * 360) + 90; 
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`; 
   
  
  const hour = now.getMinutes();  
  const hourDegrees = ((mins / 12) * 360) + 90; 
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; 
  
}


/*=======================================
## Hook Event Listeners || Callbacks
=======================================*/

setInterval( setDate, 1000 );