"use strict";

const dropdownHeaders = document.querySelectorAll(".js-dropdown-header");

function changeDropdown(ev) {
  const header = ev.currentTarget;
  const arrow = header.querySelector(".js-arrow");
  const container = header.parentNode.querySelector(".dropdowncontainer");
  const isClose = container.classList.contains("hidden");
  // close all arrows
  const allArrow = document.querySelectorAll(".js-arrow");
  for (const arrow of allArrow) {
    arrow.classList.remove("changeArrow");
  }
  // close all containers
  const allContainers = document.querySelectorAll(".dropdowncontainer");
  for (const container of allContainers) {
    container.classList.add("hidden");
  }
  // toggle arrow
  if (isClose) {
    arrow.classList.add("changeArrow");
    arrow.classList.remove("dropdown__arrow");
    container.classList.remove("hidden");
  } else {
    arrow.classList.remove("changeArrow");
    arrow.classList.add("dropdown__arrow");
    container.classList.add("hidden");
  }
}

for (const dropdownHeader of dropdownHeaders) {
  dropdownHeader.addEventListener("click", changeDropdown);
}
/*
const dropdownDesign = document.querySelector(".design");
const dropdownFill = document.querySelector(".fill");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownFillBtn = document.querySelector(".dropdownfill-btn");
const dropdownContainer = document.querySelector(".dropdowncontainer");
const dropdownFillContainer = document.querySelector(".dropdownfillcontainer");
const dropdownArrowDesign = document.querySelector(".js-arrow");
const dropdownArrowFill = document.querySelector(".js-arrow-fill");
const dropdownShare = document.querySelector(".share");
const dropdownShareBtn = document.querySelector(".dropdownshare-btn");
const dropdownShareContainer = document.querySelector(
  ".dropdownsharecontainer"
);
const dropdownArrowShare = document.querySelector(".js-arrow-share");

function Dropdown() {
  if (dropdownContainer.classList.contains("hidden")) {
    dropdownContainer.classList.remove("hidden");
    dropdownFillContainer.classList.add("hidden");
    dropdownShareContainer.classList.add("hidden");
    dropdownArrowDesign.classList.add("changeArrowDown");
    dropdownArrowFill.classList.remove("changeArrowDown");
    dropdownArrowFill.classList.add("changeArrowUp");
    dropdownArrowShare.classList.remove("changeArrowDown");
    dropdownArrowShare.classList.add("changeArrowUp");
  } else {
    dropdownContainer.classList.add("hidden");
    dropdownArrowDesign.classList.remove("changeArrowDown");
    dropdownArrowDesign.classList.add("changeArrowUp");
  }
}
dropdownBtn.addEventListener("click", Dropdown);

function fillDropdown() {
  if (dropdownFillContainer.classList.contains("hidden")) {
    dropdownFillContainer.classList.remove("hidden");
    dropdownContainer.classList.add("hidden");
    dropdownShareContainer.classList.add("hidden");
    dropdownArrowFill.classList.add("changeArrowDown");
    dropdownArrowDesign.classList.remove("changeArrowDown");
    dropdownArrowDesign.classList.add("changeArrowUp");
    dropdownArrowShare.classList.remove("changeArrowDown");
    dropdownArrowShare.classList.add("changeArrowUp");
  } else {
    dropdownFillContainer.classList.add("hidden");
    dropdownArrowFill.classList.remove("changeArrowDown");
    dropdownArrowFill.classList.add("changeArrowUp");
  }
}
dropdownFillBtn.addEventListener("click", fillDropdown);

function shareDropdown() {
  if (dropdownShareContainer.classList.contains("hidden")) {
    dropdownShareContainer.classList.remove("hidden");
    dropdownContainer.classList.add("hidden");
    dropdownFillContainer.classList.add("hidden");
    dropdownArrowShare.classList.add("changeArrowDown");
    dropdownArrowDesign.classList.remove("changeArrowDown");
    dropdownArrowDesign.classList.add("changeArrowUp");
    dropdownArrowFill.classList.remove("changeArrowDown");
    dropdownArrowFill.classList.add("changeArrowUp");
  } else {
    dropdownShareContainer.classList.add("hidden");
    dropdownArrowShare.classList.remove("changeArrowDown");
    dropdownArrowShare.classList.add("changeArrowUp");
  }
}

dropdownShareBtn.addEventListener("click", shareDropdown);
*/
