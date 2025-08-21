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

function addGrid(container,times){
  times=times*times
  for(let i=0;i<times;i++){
    div=document.createElement('div')
    container.append(div)
  }

}

const grid=document.querySelector("[data-grid]")
const gridMobile=document.querySelector("[data-grid-mobile]")
 
addGrid(grid,16)
addGrid(gridMobile,16)