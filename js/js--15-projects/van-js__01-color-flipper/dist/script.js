/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/john-smilga/javascript-basic-projects/tree/master/1-color-flipper
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

// Get Elements 

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnHex = document.getElementById("btn-hex");
const colorHex = document.querySelector(".color-hex");

// Build Functions 

const random = () => {
  console.log(getRandomNumber());
  // get random number between 0 - 3
  const randomNumber = getRandomNumber();
  
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]; 
}

const randomHex = () => {
  console.log(getRandomHex());
  let hexColor = '#'; 
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomHex()]; 
  }
  console.log(hexColor); 
  colorHex.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

const getRandomNumber = () => { 
   return Math.floor(Math.random() * colors.length);
}

const getRandomHex = () => {
  return Math.floor(Math.random() * hex.length);
}
console.log(getRandomNumber());
console.log(getRandomHex());


// Hook Event Listener

btn.addEventListener('click',random); 
btnHex.addEventListener('click', randomHex);