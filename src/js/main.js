'use strict';

const fullName = document.querySelector('.jsname');
const previewName = document.querySelector('.jsnamepreview');

function handleName() {
    let nameValue = fullName.value;

    if (nameValue === "") {
        previewName.innerHTML = 'Nombre Apellidos';
    } else {
        previewName.innerHTML = nameValue;
    }
}


fullName.addEventListener('keyup', handleName);