// --- CONFIGURATION & GLOBALS ---
const LETTERS = ['a', 'e', 't', 'c', 'h', 'middlebar', 's', 'k'];
let isMouseDown = false;
let currentState = "normal";

// --- SELECTORS ---
const desktopGrid = document.querySelector("[data-grid]");
const mobileGrid = document.querySelector("[data-grid-mobile]");
const sizeSlider = document.querySelector('[data-size]');
const colorPicker = document.querySelector('[data-color]'); 
const pencilColor = document.querySelector('[data-picker]'); 
const numberSizeLabels = document.querySelectorAll('[data-number]');
const clearButtons = document.querySelectorAll('[data-clear]');
const modeButtons = document.querySelectorAll('[data-mode-button]');

// --- FEATURE: TITLE EFFECTS ---
function initTitleEffects() {
  LETTERS.forEach(letter => {
    const elements = document.querySelectorAll(`[data-${letter}]`);
    elements.forEach(el => {
      el.addEventListener("mouseenter", () => {
        el.src = `Images/Transformed-Title/${letter.toUpperCase()}.png`;
      });
      el.addEventListener("mouseleave", () => {
        el.src = `Images/Title/${letter.toLowerCase()}.png`;
        el.style.transform = "translateX(3px)";
      });
    });
  });
}

// --- FEATURE: GRID LOGIC ---

function updateMode(e) {
  // 1. Determine state based on data attributes
  if (e.target.hasAttribute('data-normal')) {
    currentState = "normal";
  } else if (e.target.hasAttribute('data-rainbow')) {
    currentState = "rainbow";
  } else if (e.target.hasAttribute('data-eraser')) {
    currentState = "eraser";
  }

  // 2. Visual Feedback: Move the [data-active] attribute
  modeButtons.forEach(btn => btn.removeAttribute('data-active'));
  e.target.setAttribute('data-active', '');
}

function changeColor(e) {
  // Only draw if mouse is down OR it's a click event
  if (e.type === 'mouseover' && !isMouseDown) return;

  const element = e.target;

  switch (currentState) {
    case "normal":
      element.style.backgroundColor = pencilColor.value;
      break;
    case "rainbow":
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      element.style.backgroundColor = `rgb(${r},${g},${b})`;
      break;
    case "eraser":
      element.style.backgroundColor = colorPicker.value;
      break;
  }
}

function createGrid(container, size) {
  if (!container) return;
  container.innerHTML = ''; 
  
  const total = size * size;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.dataset.gridElement = 'off';
    // Add both mouseover (for dragging) and mousedown (for single clicks)
    div.addEventListener("mouseover", changeColor);
    div.addEventListener("mousedown", changeColor);
    container.append(div);
  }
}

function clearGrid() {
  const gridElements = document.querySelectorAll("[data-grid-element]");
  gridElements.forEach(element => {
    element.style.backgroundColor = colorPicker.value;
  });
}

function updateGridSize() {
  const size = sizeSlider.value;
  numberSizeLabels.forEach(num => num.textContent = size);
  createGrid(desktopGrid, size);
  createGrid(mobileGrid, size);
}

// --- INITIALIZATION ---
function init() {
  // 1. Setup Mouse Tracking
  window.addEventListener("mousedown", () => isMouseDown = true);
  window.addEventListener("mouseup", () => isMouseDown = false);

  // 2. Launch Features
  initTitleEffects();
  createGrid(desktopGrid, 16);
  createGrid(mobileGrid, 16);

  // 3. Event Listeners
  sizeSlider.addEventListener('input', updateGridSize);
  
  clearButtons.forEach(btn => {
    btn.addEventListener('click', clearGrid);
  });

  modeButtons.forEach(btn => {
    btn.addEventListener('click', updateMode);
  });
  colorPicker.addEventListener('input', clearGrid);
}

init();