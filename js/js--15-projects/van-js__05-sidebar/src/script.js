/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/john-smilga/javascript-basic-projects/tree/master/5-sidebar
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 
/*=================================
## Get Elements 
=================================*/

const toggleBtn = document.querySelector('.sidebar-toggle');

const closeBtn = document.querySelector('.close-btn');

const sidebar = document.querySelector('.sidebar');

/*================================
## Build Functions 
=================================*/

const toggle = () => {
  console.log(sidebar.classList);
  // if(sidebar.classList.contains('show-sidebar')) {
  //   sidebar.classList.remove('show-sidebar'); 
  // } else {
  //   sidebar.classList.add('show-sidebar');
  // }
  sidebar.classList.toggle('show-sidebar'); 
}

const close = () => {
  sidebar.classList.remove('show-sidebar'); 
}

/*===============================
## Hook Event Listeners
================================*/

toggleBtn.addEventListener("click", toggle); 

closeBtn.addEventListener("click", close);
