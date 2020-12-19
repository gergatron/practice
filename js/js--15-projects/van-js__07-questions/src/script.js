/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
++ https://github.com/john-smilga/javascript-basic-projects/tree/master/7-questions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

// 1. traversing the dom

// 2. using selectors inside the element


/*=================================
## Get Elements 
=================================*/

// 1. traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// 2. using selectors inside the element
const questions = document.querySelectorAll(".question");


/*================================
## Build Functions 
=================================*/

// 1. traversing the dom
// const showText = (e) => {
//   const question = e.currentTarget.parentElement.parentElement; 
//   question.classList.toggle('show-text'); 
// }



// 2. using selectors inside the element

  
  
/*===============================
## Hook Event Listeners
================================*/

// 1. traversing the dom
// btns.forEach(btn => btn.addEventListener('click', showText ));

// 2. using selectors inside the element


questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});