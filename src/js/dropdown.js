'use strict';

const dropdownDesign = document.querySelector('.design');
const dropdownFill = document.querySelector('.fill');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownFillBtn = document.querySelector('.dropdownfill-btn');
const dropdownContainer = document.querySelector ('.dropdowncontainer');
const dropdownFillContainer = document.querySelector ('.dropdownfillcontainer');
const dropdownArrowDesign = document.querySelector('.js-arrow');
const dropdownArrowFill = document.querySelector('.js-arrow-fill');


function Dropdown(){
    if (dropdownContainer.classList.contains('hidden')){
        dropdownContainer.classList.remove('hidden')
        dropdownArrowDesign.classList.add('changeArrow')
    }
    else{
        dropdownContainer.classList.add('hidden')
        dropdownArrowDesign.classList.remove('changeArrow')
    }
};
dropdownBtn.addEventListener('click', Dropdown);

function fillDropdown(){
    if (dropdownFillContainer.classList.contains('hidden')){
        dropdownFillContainer.classList.remove('hidden')
        dropdownArrowFill.classList.add('changeArrow')
    }
    else{
        dropdownFillContainer.classList.add('hidden')
        dropdownArrowFill.classList.remove('changeArrow')
    }
};
dropdownFillBtn.addEventListener('click', fillDropdown);