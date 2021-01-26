'use strict';

const dropdownDesign = document.querySelector('.design');
const dropdownFill = document.querySelector('.fill');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownFillBtn = document.querySelector('.dropdownfill-btn');
const dropdownContainer = document.querySelector ('.dropdowncontainer');
const dropdownFillContainer = document.querySelector ('.dropdownfillcontainer');
const dropdownArrow = document.querySelector('.js-arrow');


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

function fillDropdown(){
    if (dropdownFillContainer.classList.contains('hidden')){
        dropdownFillContainer.classList.remove('hidden')
        dropdownArrow.classList.add('changeArrow')
    }
    else{
        dropdownFillContainer.classList.add('hidden')
        dropdownArrow.classList.remove('changeArrow')
    }
};
dropdownFillBtn.addEventListener('click', fillDropdown);