'use strict';

const dropdownArrow = document.querySelector('.fa-chevron-down');

function TransformArrow(){
   // dropdownArrow.classList.add ('js-arrow')
   dropdownArrow.style.color = 'blue'
}

dropdownArrow.addEventListener('click', TransformArrow);