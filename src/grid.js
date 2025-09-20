let isMouseDown = false;

export function addGrid(container, size) {
  const total = size * size;
  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.dataset.gridElement = "off";

    div.addEventListener("mouseover", changeColor);
    div.addEventListener("mousedown", (e) => {
      e.target.style.background = "black";
    });
    container.append(div);
  }

  container.style.gridTemplateColumns = `repeat(${size},1fr)`;
  container.style.gridTemplateRows = `repeat(${size},1fr)`;
}

export function resetGrid() {
  const gridElements = document.querySelectorAll("[data-grid-element]");
  gridElements.forEach(element => element.style.background = "white");
}
import { setupColorPicker } from './colorPicker.js';
setupColorPicker
export function setupGridEvents() {
  document.addEventListener("mousedown", () => { isMouseDown = true; });
  document.addEventListener("mouseup", () => { isMouseDown = false; });
}

// Example color-change handler
function changeColor(e) {
  if (isMouseDown) {
    e.target.style.background ="GRAY" ;
  }
}
