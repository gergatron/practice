/*=======================================
- https://github.com/wesbos/JavaScript30/tree/master/08%20-%20Fun%20with%20HTML5%20Canvas
=======================================*/


/*=======================================
## Get Elements 
=======================================*/

const canvas = document.querySelector('#draw'); 
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 
ctx.strokeStyle = '#BADA55'; 
ctx.lineJoin = 'round'; 
ctx.lineCap = 'round'; 
ctx.lineWidth = 100; 
ctx.globalCompositeOperation = 'multiply'; 


// options || settings 

let isDrawing = false; 
let lastX = 0; 
let lastY = 0; 
let hue = 0; 
let direction = true; 


/*=======================================
## Build Functions 
=======================================*/

const draw = (e) => {
  if(!isDrawing) return; // stop fn from running
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); 
  ctx.lineTo(e.offsetX, e.offsetY); 
  ctx.stroke(); 
  [lastX, lastY]  = [e.offsetX, e.offsetY];
  hue++; 
  if(hue >= 360) {
    hue = 0; 
  }
  
 if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
   direction = !direction; 
  }
  
  if(direction){
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
  

}



/*=======================================
## Hook Event Listeners || Callbacks
=======================================*/


canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY]  = [e.offsetX, e.offsetY];
});
                        
                        
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);