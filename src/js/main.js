'use strict';
//Name
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

//Mail
const mail = document.querySelector('.jsmail');
const previewMail = document.querySelector('.jsmaillink');

function handleMail() {
    let mailValue = mail.value;
    if (mailValue === ""){
        previewMail.innerHTML = previewMail;
    }
    else {
        previewMail.innerHTML = `<a href="mailto:${mailValue}" class="link-icon " target="_blank">
        <i class="far fa-envelope link" aria-hidden="true" alt="icon-mail"></i>
    </a>`;
    }
}
mail.addEventListener('keyup', handleMail);