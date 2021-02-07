"use strict";

const deleteButton = document.querySelector(".js-reset");
const inputElements = document.querySelectorAll(".form__input");
const smallPhoto = document.querySelector(".js-resetSmallphoto");
const previewPhoto = document.querySelector(".js-previewPhotoReset");

console.log(inputElements);

function handleDelete() {
  handleDeleteForm();
  handleResetDesignPreview();
  handleResetDesignValue();
  saveInLocalStorage();
}

function handleDeleteForm() {
  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].value !== "") {
      inputElements[i].value = "";
    }
  }
  photo = "";
  handleName();
  handleJob();
  handleMail();
  handlePhone();
  handleLinkedin();
  handleGithub();
  updatePhoto();
}

function handleResetDesignPreview() {
  //Volver a palette-1 en preview
  cardElement.classList.remove(
    "palette-1",
    "palette-2",
    "palette-3",
    "palette-4"
  );
}

function handleResetDesignValue() {
  const paletteInput1 = document.querySelector(".js-input1");
  const palettetoReset = document.querySelector(".js-palette:checked");
  palettetoReset.checked = false;
  paletteInput1.checked = true;
}

deleteButton.addEventListener("click", handleDelete);
