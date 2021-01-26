'use strict';

const dropdownDesign = document.querySelector('.design');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContainer = document.querySelector ('.dropdowncontainer');
const dropdownArrow = document.querySelector('.js-arrow')
function Dropdown(){
    if (dropdownContainer.classList.contains('hidden')){
        dropdownContainer.classList.remove('hidden')
        dropdownArrow.classList.add('changeArrow')
    }
    else{
        dropdownContainer.classList.add('hidden')
        dropdownArrow.classList.remove('changeArrow')
    }
};
dropdownBtn.addEventListener('click', Dropdown);
