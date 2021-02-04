"use strict";

const deleteButton = document.querySelector(".js-reset");
const inputElements = document.querySelectorAll(".form__input");
const smallPhoto = document.querySelector(".js-resetSmallphoto");
const previewPhoto = document.querySelector(".js-previewPhotoReset");

console.log(inputElements);

function handleDelete() {
  handleDeleteForm();
  //   handleDeletePhoto();
}

function handleDeleteForm() {
  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].value !== "") {
      inputElements[i].value = "";
    }
  }
}

// function handleDeletePhoto() {
//   previewPhoto.classList.add("previewPhotoReset");
// }

deleteButton.addEventListener("click", handleDelete);
