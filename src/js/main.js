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
    let mailValue = mail.mail;
    let data = { mailValue };
    previewMail.href = "mailto:" + data.mail;
}

mail.addEventListener('keyup', handleMail);