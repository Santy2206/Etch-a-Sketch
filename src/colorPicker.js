
export function setupColorPicker() {
 
  document.addEventListener("mousedown", () => { isMouseDown =false; });
  document.addEventListener("mouseup", () => { isMouseDown = false; });

  colors.select();
}
