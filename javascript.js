// --- CONFIGURATION & GLOBALS ---
const LETTERS = ['a', 'e', 't', 'c', 'h', 'middlebar', 's', 'k'];
let isMouseDown = false;
let currentState="normal";
// --- SELECTORS ---
const desktopGrid = document.querySelector("[data-grid]");
const mobileGrid = document.querySelector("[data-grid-mobile]");
const sizeSlider = document.querySelector('[data-size]');
const colorPicker = document.querySelector('[data-color]');
const numberSizeLabels = document.querySelectorAll('[data-number]');
let colorsList=document.querySelector('[data-pencil]')
let colorMode=colorsList.closest('[data-active]')

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
function createGrid(container, size) {
  container.innerHTML = ''; // Clear existing grid before adding new one
  const total = size * size;
  
  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.dataset.gridElement = 'off';
    container.append(div);
  }
  
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function updateGridSize() {
  const size = sizeSlider.value;
  numberSizeLabels.forEach(num => num.textContent = size);
  createGrid(desktopGrid, size);
  createGrid(mobileGrid, size);
}
function changeColor(){

    if('normal' in b.dataset){

      gridElement.forEach(div=>{

        div.style.backgroundColor=gridColorChanger.value

      div.addEventListener("mouseover",e=>{

        if(mousedown) e.target.style.background = input.value;

      }),

      div.addEventListener("mousedown", (e) => {

        e.target.style.background = input.value;

      });



      })

    }
    if('rainbow' in b.dataset){

        const r = Math.floor(Math.random() * 256); // Random number between 0 and 255 for Red

        const g = Math.floor(Math.random() * 256); // Random number between 0 and 255 for Green

        const b = Math.floor(Math.random() * 256);

        newBackground=`rgb(${r}, ${g}, ${b});`

        gridElement.forEach(element=>{

          element.addEventListener("mouseover",e=>{

          if(mousedown) e.target.style.background =newBackground;

        }),

        element.addEventListener("mousedown", (e) => {

          e.target.style.background = newBackground;

        });



        })
      }
  
}

// --- INITIALIZATION ---
function init() {
  // 1. Setup Mouse Tracking
  document.addEventListener("mousedown", () => isMouseDown = true);
  document.addEventListener("mouseup", () => isMouseDown = false);

  // 2. Launch Features
  initTitleEffects();
  createGrid(desktopGrid, 16);
  createGrid(mobileGrid, 16);

  // 3. Event Listeners
  sizeSlider.addEventListener('input', updateGridSize);
  
  // ...
}

init();