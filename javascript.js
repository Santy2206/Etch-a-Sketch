eTitle=document.querySelector('[data-e]')

  eTitle.addEventListener("mouseenter", () => {
    eTitle.src = "Images/Transformed-Title/E.png"; // Change to new src on hover
  });

  eTitle.addEventListener("mouseleave", () => {
    eTitle.src = "Images/Title/e.png"; // Revert back on hover out
  });