eTitle=document.querySelector('[data-e]')
tTitle=document.querySelector('[data-t]')
cTitle=document.querySelector('[data-c]')
hTitle=document.querySelector('[data-h]')
middleBarTitle=document.querySelector('[data-middle-bar]')
aTitle=document.querySelector('[data-a]')
sTitle=document.querySelector('[data-s]')
kTitle=document.querySelector('[data-k]')



  eTitle.addEventListener("mouseenter", () => {
    eTitle.src = "Images/Transformed-Title/E.png"; 
  });

  eTitle.addEventListener("mouseleave", () => {
    eTitle.src = "Images/Title/e.png"; 
    eTitle.style.transform="translateX(3px)"
  });

  tTitle.addEventListener("mouseenter", () => {
    tTitle.src = "Images/Transformed-Title/T.png"; 
  });

  tTitle.addEventListener("mouseleave", () => {
    tTitle.src = "Images/Title/t.png"; 
    tTitle.style.transform="translateX(3px)"
  });
