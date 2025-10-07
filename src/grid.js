let isMouseDown = false;
const backgroundColor = document.querySelector("[data-backgroundColor]");
const pencelColor = document.querySelector("[data-pencelColor]");
export function addGrid(container, size) {
  const total = size * size;
  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.dataset.gridElement = "off";

    div.addEventListener("mouseover", changeColor);
    div.addEventListener("mousedown", (e) => {
      e.target.style.background = pencelColor.value;
    });
    container.append(div);
  }

  container.style.gridTemplateColumns = `repeat(${size},1fr)`;
  container.style.gridTemplateRows = `repeat(${size},1fr)`;
}

export function resetGrid() {
  const gridElements = document.querySelectorAll("[data-grid-element]");
  gridElements.forEach(element => element.style.background = backgroundColor.value);
}
export function setupGridEvents() {
  document.addEventListener("mousedown", () => { isMouseDown = true; });
  document.addEventListener("mouseup", () => { isMouseDown = false; });
}

function changeColor(e) {
  if (isMouseDown) {
    e.target.style.background =pencelColor.value ;
  }
}
