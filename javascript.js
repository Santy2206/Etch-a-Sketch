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

function addGrid(container, size) {
  container.innerHTML = ""; // clear old grid
  const total = size * size;
  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    container.append(div);
  }

  // make sure CSS knows how many columns
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

const grid = document.querySelector("[data-grid]");
const gridMobile = document.querySelector("[data-grid-mobile]");

// function to adjust grid size based on screen width
function setupResponsiveGrid() {
  if (window.innerWidth < 768) {
    addGrid(gridMobile, 8); // smaller grid for mobile
  } 
  else {
    addGrid(grid, 15); // larger grid for desktop
  }
}

// run once and on resize
setupResponsiveGrid();