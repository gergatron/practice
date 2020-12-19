/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/john-smilga/javascript-basic-projects/tree/master/4-navbar
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

// ### height:auto css setting... very important

// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


/*=================================
## Get Elements 
=================================*/

const navToggle = document.querySelector(".nav-toggle"); 

const links = document.querySelector(".links"); 

/*================================
## Build Functions 
=================================*/

const toggle = () => {
  // console.log(links.classList);
  // console.log(links.classList.contains("random")); 
  // console.log(links.classList.contains("links")); 
  
  // if(links.classList.contains('show-links')) {
  //   links.classList.remove('show-links');
  // } else {
  //   links.classList.add('show-links');
  // }
  links.classList.toggle('show-links');
}

/*===============================
## Hook Event Listeners
================================*/

navToggle.addEventListener("click", toggle);