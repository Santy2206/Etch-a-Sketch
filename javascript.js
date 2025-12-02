// Header 
const letters=['a','e','t','c','h','middlebar','s','k',]
function titleEffect(){
  letters.forEach(letter=>{
  let selector=`[data-${letter}]`
  let elements=document.querySelectorAll(selector)
    elements.forEach(el => {
    el.addEventListener("mouseenter", () => {
  
      const capitalized = letter.toUpperCase();
      el.src = `Images/Transformed-Title/${capitalized}.png`;
    });

    el.addEventListener("mouseleave", () => {
  
      const lowercased = letter.toLowerCase();
      el.src = `Images/Title/${lowercased}.png`;
      el.style.transform = "translateX(3px)";
    });
  });

  })
}
titleEffect()

// Grid
let input=document.querySelector("[data-picker")
let desktopGrid=document.querySelector("[data-grid]")
let mobileGrid=document.querySelector("[data-grid-mobile]")
let gridColorChanger=document.querySelector('[data-color]')
let normalModeButton=document.querySelector('[data-normal]')
let rainbowModeButton=document.querySelector('[data-rainbow]')
let eraserModeButton=document.querySelector('[data-eraser]')

let mousedown=false
document.addEventListener("mousedown",()=>{mousedown=true})
document.addEventListener("mouseup",()=>{mousedown=false})

if('active'in normalModeButton.dataset){
  function addGrid(container,size){
    let total=size*size
    for(let i=0;i<total;i++){
      let div=document.createElement("div")
      div.dataset.gridElement='off'
      div.style.backgroundColor=gridColorChanger.value 
      div.addEventListener("mouseover",e=>{
        if(mousedown) e.target.style.background = input.value;
      }),
      div.addEventListener("mousedown", (e) => {
        e.target.style.background = input.value;
      });
      container.append(div)
    }

    container.style.gridTemplateColumns=`repeat(${size},1fr)`
    container.style.gridTemplateRows=`repeat(${size},1fr)`
  }
  addGrid(desktopGrid,16)
  addGrid(mobileGrid,16)
}

// buttons
let activeMode=document.querySelector('[data-active]')
let colorModes=document.querySelector('[data-colors]')
let colorModesButtons=colorModes.querySelectorAll('[data-carousel-button]')

colorModesButtons.forEach((b)=>{
  b.addEventListener("click",()=>{
    colorModesButtons.forEach(b=>{
      delete b.dataset.active
      b.style.boxShadow = '';
      b.style.transform = '';
    })
    b.dataset.active=''
    if('active'in b.dataset){
      b.style.boxShadow = 'var(--glow-effect)';
      b.style.transform = 'scale(1.02)';
    }
  })
})


function resetGrid(){
  gridElement=document.querySelectorAll('[data-grid-element]')
  gridElement.forEach(element=>{
    element.style.background=gridColorChanger.value
  })
}
let clearButton=document.querySelector('[data-clear]')
clearButton.addEventListener("click",resetGrid)


let numberSize=document.querySelectorAll('[data-number]')
let sizeSlider=document.querySelector('[data-size]')

function resetSize(){
  numberSize.forEach(num=>{
    num.textContent=sizeSlider.value
  })
  addGrid(desktopGrid,sizeSlider.value)
  addGrid(mobileGrid,sizeSlider.value)
}
sizeSlider.addEventListener('input',resetSize)
sizeSlider.addEventListener('mousedown',resetGrid)

