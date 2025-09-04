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
function changeColor(e){
  if (e.type ==="mouseover"&& !mouseDown)return
  e.target.style.backgroundColor="blue"
}
function addGrid(container, size) {
  container.innerHTML = ""; 
  const total = size * size;
  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    container.append(div)
    div.addEventListener("mouseover",changeColor)
    div.addEventListener("mousedown",changeColor)

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
 }
}

const grid = document.querySelector("[data-grid]");
const gridMobile = document.querySelector('[data-grid-mobile]');

addGrid(grid,16)
addGrid(gridMobile,16)
