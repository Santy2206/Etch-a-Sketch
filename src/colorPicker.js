let isMouseDown = false;

export function setupColorPicker(defaultColor) {
  const colors = document.querySelector("#colors");
  colors.value = defaultColor;

  colors.addEventListener("input", (e) => {
    if (isMouseDown) {
      e.target.style.color = e.target.value;
    }
  });

  document.addEventListener("mousedown", () => { isMouseDown = true; });
  document.addEventListener("mouseup", () => { isMouseDown = false; });

  colors.select();
}
