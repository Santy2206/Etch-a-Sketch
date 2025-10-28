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

let defaultColor="#333333"
let input=document.querySelector("[data-color]")
function getNewColor(){
  return input.getAttribute('value')
}
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  input.forEach((p) => {
    p.style.color = event.target.value;
  });
}
let mousedown=false;
function changeColor(e){
  if(mousedown){
    newColor=getNewColor()
    e.target.style.background=newColor
  }
}
let desktopGrid=document.querySelector("[data-grid]")
let mobileGrid=document.querySelector("[data-grid-mobile]")
function addGrid(container,size){
  let total=size*size
  for(let i=0;i<total;i++){
    let div=document.createElement("div")
    div.dataset.gridElement='off'
    
    div.addEventListener("mouseover", changeColor);

    div.addEventListener("mousedown", (e) => {
      e.target.style.background = "black";
    });
    container.append(div)
  }

  container.style.gridTemplateColumns=`repeat(${size},1fr)`
  container.style.gridTemplateRows=`repeat(${size},1fr)`
}
document.addEventListener("mousedown",()=>{mousedown=true})
document.addEventListener("mouseup",()=>{mousedown=false})
addGrid(desktopGrid,16)
addGrid(mobileGrid,16)


gridElement=document.querySelectorAll('[data-grid-element]')
gridColorChanger=document.querySelector('data-color')
function resetGrid(){
  gridElement.forEach(element=>{
    element.style.background=gridColorChanger.value
  })
}
let clearButton=document.querySelector('[data-clear]')
clearButton.addEventListener("click",resetGrid)




