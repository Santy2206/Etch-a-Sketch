import { titleEffect } from './titleEffect.js';
import { addGrid} from './grid.js';
import { setupColorPicker } from './colorPicker.js';

function main() {
  // Initialize title hover effect
  titleEffect();

  // Setup grid
  const desktopGrid = document.querySelector("[data-grid]");
  const mobileGrid  = document.querySelector("[data-grid-mobile]");
  addGrid(desktopGrid, 16);
  addGrid(mobileGrid, 16);

  // Setup color picker
  setupColorPicker("#000000"); // pass your default color here

  // Clear button
  // const clearButton = document.querySelector("[data-clear]");
  // clearButton.addEventListener("click", resetGrid);
}

document.addEventListener("DOMContentLoaded", main);
