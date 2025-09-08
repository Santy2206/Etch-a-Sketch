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
let desktopGrid=document.querySelector("[data-grid]")
let mobileGrid=document.querySelector("[data-grid-mobile]")
function addGrid(container,size){
  size=size*size
  for(size;size<=0;size--){
    let div=document.createElement="div"
    container.append(div)
  }
}
addGrid(desktopGrid,16)
addGrid(mobileGrid,16)

