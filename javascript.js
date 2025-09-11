const letters=['a','e','t','c','h','middlebar','s','k',]
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
let isMouseDown=false
function changeColor(e) {
  if(isMouseDown){
    e.target.style.background="black"
  }
}
let desktopGrid=document.querySelector("[data-grid]")
let mobileGrid=document.querySelector("[data-grid-mobile]")
function addGrid(container,size){
  let total=size*size
  for(let i=0;i<total;i++){
    let div=document.createElement("div")
    
    div.addEventListener("mouseover", changeColor);

    div.addEventListener("mousedown", (e) => {
      e.target.style.background = "black";
    });
    container.append(div)
  }

  container.style.gridTemplateColumns=`repeat(${size},1fr)`
  container.style.gridTemplateRows=`repeat(${size},1fr)`
}
document.body.addEventListener("mousedown",()=>{isMouseDown=true})
document.body.addEventListener("mouseup",()=>{isMouseDown=false})
addGrid(desktopGrid,16)
addGrid(mobileGrid,16)

