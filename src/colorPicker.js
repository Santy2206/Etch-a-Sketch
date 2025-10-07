
export function setupColorPicker() {
  document.addEventListener("mousedown", () => { isMouseDown =true; });
  document.addEventListener("mouseup", () => { isMouseDown = false; });

  colors.select();
}
