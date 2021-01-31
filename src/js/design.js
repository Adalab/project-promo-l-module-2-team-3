"use strict";

const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");

// function handlePalette() {
//   cardElement.classList.remove("palette-1", "palette-2", "palette-3");
//   const checkedPalette = document.querySelector(".js-palette:checked");
//   const checkedPaletteValue = checkedPalette.value;
//   cardElement.classList.add("palette-" + checkedPaletteValue);
//   console.log(checkedPaletteValue);
// }

// for (const paletteElement of paletteElements) {
//   paletteElement.addEventListener("change", handlePalette);
// }

function handlePalette(ev) {
  // borro las clases palette-1, palette-2 y palette-3 del js-card
  cardElement.classList.remove(
    "palette-1",
    "palette-2",
    "palette-3",
    "palette-4"
  );

  // añado palette-x a js-card en función de la paleta seleccionada
  const paletteValue = ev.currentTarget.value;
  cardElement.classList.add("palette-" + paletteValue);
}
for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("change", handlePalette);
}
