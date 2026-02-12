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
  let currentStateButton=document.querySelector("[data-active]")
  const clearButtons=document.querySelectorAll('[data-clear]')
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
function setCurrentState(element){

    if("normal" in element.dataset){
      currentState="normal"
    }
    else if( "rainbow" in element.dataset){
      currentState="rainbow"
    }
    else{
      currentState="eraser"
    }
    
  return currentState
}
  function changeColor(Event){
    element=Event.target
    if(isMouseDown===true){
      switch(currentState){

        case"normal":
          element.style.backgroundColor=colorPicker.value
          break
        case "rainbow":
          const randomInteger=(max)=>Math.floor(Math.random()*(max+1))
          const r=randomInteger(255)
          const g= randomInteger(255)
          const b=randomInteger(255)
          randomColor=`rgb(${r},${g},${b})`
          element.style.backgroundColor=randomColor
          break
        case "eraser":
          element.style.backgroundColor=colorPicker.value


      }

      
    }
  }
  function createGrid(container, size) {
    container.innerHTML = ''; // Clear existing grid before adding new one
    const total = size * size;
    
    for (let i = 0; i < total; i++) {
      const div = document.createElement("div");
      div.dataset.gridElement = 'off';
      div.addEventListener("mouseover",changeColor)
      container.append(div);
    }
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }
  function clearGrid(){
    let gridElements=document.querySelectorAll("[data-grid-element]")
    gridElements.forEach(element=>{
      element.style.backgroundColor=colorPicker.value
    })

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
  document.addEventListener("mousedown", () => isMouseDown = true);
  document.addEventListener("mouseup", () => isMouseDown = false);

  // 2. Launch Features
  initTitleEffects();
  currentState=setCurrentState()
  createGrid(desktopGrid, 16);
  createGrid(mobileGrid, 16);
  

  // 3. Event Listeners
  sizeSlider.addEventListener('input', updateGridSize);
  clearButtons.forEach(clearButton=>{
    clearButton.addEventListener('click',clearGrid)
  })
  colorsList.children.forEach((element)=>{
    element.addEventListener("click",(event)=>{event.target.dataset="data-active"})
  })



  
  // ...
}

init();