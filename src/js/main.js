"use strict";

//Form
const form = document.querySelector(".jsform");

function handleForm(ev) {
    ev.preventDefault();
}

form.addEventListener("submit", handleForm);

//Name
const fullName = document.querySelector(".jsname");
const previewName = document.querySelector(".jsnamepreview");

function handleName(ev) {
    let nameValue = fullName.value;

    if (nameValue === "") {
        previewName.innerHTML = "Paquita Salas";
    } else {
        previewName.innerHTML = nameValue;
    }
    // check intro key
    if (ev.keyCode === 13) {
        jobElement.focus();
    }
}

fullName.addEventListener("keyup", handleName);

//Job

const jobElement = document.querySelector(".jsjob");
const previewJob = document.querySelector(".jsjobpreview");

function handleJob() {
    let jobValue = jobElement.value;

    if (jobValue === "") {
        previewJob.innerHTML = "CEO PS Management";
    } else {
        previewJob.innerHTML = jobValue;
    }
}

jobElement.addEventListener("keyup", handleJob);

//Mail
const mail = document.querySelector(".jsmail");
const previewMail = document.querySelector(".jsmaillink");

function handleMail() {
    let mailValue = mail.value;
    if (mailValue === "") {
        previewMail.href = "#";
    } else {
        previewMail.href = `mailto:${mailValue}`;
    }
}
mail.addEventListener("keyup", handleMail);

//Para que no haga scroll al pulsar el icono cuando no hay mail puesto

function preventLink(ev) {
    console.log(ev);
    if (mail.value === "") {
        ev.preventDefault();
    }
}
previewMail.addEventListener("click", preventLink);

//Phone
const telephone = document.querySelector(".jsphone");
const previewTelephone = document.querySelector(".jsphonelink");

function handlePhone(ev) {
    let telephoneValue = telephone.value;

    if (telephoneValue === "") {
        previewTelephone.href = "#";
    } else {
        previewTelephone.href = `tel:${telephoneValue}`;
    }
    // check intro key
    if (ev.keyCode === 13) {
        const dropdownShareBtn = document.querySelector(".dropdownshare-btn");
        dropdownShareBtn.click();
        const shareBtn = document.querySelector(".jssharebtn");
        shareBtn.focus();
    }
}
telephone.addEventListener("keyup", handlePhone);

//Linkedin
const linkedin = document.querySelector(".jslinkedin");
const previewLinkedin = document.querySelector(".jslinkedinlink");

function handleLinkedin() {
    let linkedinValue = linkedin.value;
    let newLinkedinValue = linkedinValue.replace('https://www.linkedin.com/in/', '');

    if (linkedinValue === "") {
        previewLinkedin.href = "#";
    } else {
        previewLinkedin.href = `https://www.linkedin.com/in/${newLinkedinValue}`;
    }


}
linkedin.addEventListener("keyup", handleLinkedin);

//Github
const github = document.querySelector(".jsgithub");
const previewGithub = document.querySelector(".jsgithublink");

function handleGithub() {
    let githubValue = github.value;
    let newGithubValue = githubValue.replace('https://github.com/', '');


    if (githubValue === "") {
        previewGithub.href = "#";
    } else {
        previewGithub.href = `https://github.com/${newGithubValue}`;
    }
}
github.addEventListener("keyup", handleGithub);

//SHARE
/*
const fullName = document.querySelector(".jsname");
const previewName = document.querySelector(".jsnamepreview");

function handleName() {
  let nameValue = fullName.value;

  if (nameValue === "") {
    previewName.innerHTML = "Paquita Salas";
  } else {
    previewName.innerHTML = nameValue;
  }
}*/