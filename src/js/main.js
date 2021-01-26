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
    if (mailValue === ''){
    previewMail.href = '#';
    }
    else {

    previewMail.href = `mailto:${mailValue}`;
    }
}
mail.addEventListener('keyup', handleMail);

//Para que no haga scroll al pulsar el icono cuando no hay mail puesto

function preventLink (ev) {
    console.log(ev);
    if (mail.value === '') {
        ev.preventDefault()
    }
}
previewMail.addEventListener('click', preventLink)

