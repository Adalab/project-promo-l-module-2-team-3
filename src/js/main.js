'use strict';
//Name
const fullName = document.querySelector('.jsname');
const previewName = document.querySelector('.jsnamepreview');

function handleName() {
    let nameValue = fullName.value;

    if (nameValue === "") {
        previewName.innerHTML = 'Paquita Salas';
    } else {
        previewName.innerHTML = nameValue;
    }
}

fullName.addEventListener('keyup', handleName);

//Job

const jobElement = document.querySelector('.jsjob');
const previewJob = document.querySelector('.jsjobpreview');

function handleJob() {
    let jobValue = jobElement.value;

    if (jobValue === "") {
        previewJob.innerHTML = 'CEO PS Management';
    } else {
        previewJob.innerHTML = jobValue;
    }
}

jobElement.addEventListener('keyup', handleJob);



//Mail
const mail = document.querySelector('.jsmail');
const previewMail = document.querySelector('.jsmaillink');

function handleMail() {
    let mailValue = mail.value;
    if (mailValue === ""){
        previewMail.innerHTML = `<a href="" class="link-icon ">
        <i class="far fa-envelope link" aria-hidden="true" alt="icon-mail"></i>
    </a>`;
    }
    else {
        previewMail.innerHTML = `<a href="mailto:${mailValue}" class="link-icon " target="_blank">
        <i class="far fa-envelope link" aria-hidden="true" alt="icon-mail"></i>
    </a>`;
    }
}
mail.addEventListener('keyup', handleMail);