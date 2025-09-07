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

let mouseOver=false;
function changeColor(e){
  if(e.type==="mouseDown"){
    e.style.backgroundColor="blue"
    mouseOver=true
    
  }
  else if(e.type==="mouseOver"){
    e.style.backgroundColor="blue"
  }
  else if (e.type==="mouserUp"){
    mouseOver=false
  }
}


