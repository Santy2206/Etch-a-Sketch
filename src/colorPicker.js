let isMouseDown = false;

export function setupColorPicker(defaultColor) {
 
  document.addEventListener("mousedown", () => { isMouseDown = true; });
  document.addEventListener("mouseup", () => { isMouseDown = false; });

  colors.select();
}
