
export function setupColorPicker(defaultColor) {
 
  document.addEventListener("mousedown", () => { isMouseDown = true; });
  document.addEventListener("mouseup", () => { isMouseDown = false; });

  colors.select();
}
