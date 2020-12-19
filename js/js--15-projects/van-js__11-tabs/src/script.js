/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/john-smilga/javascript-basic-projects/tree/master/11-tabs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
about.addEventListener('click', function(e){
  console.log(e.target);
})

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 

/*===============================
## Get Elements 
=================================*/

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

/*==============================
## Build Functions 
=================================*/

const toggleTab = (e) => {
  const id = e.target.dataset.id;
  if(id){
    // remove active from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles 
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active"); 
  }
}

/*=============================
## Hook Event Listeners
================================*/

about.addEventListener('click', toggleTab);


