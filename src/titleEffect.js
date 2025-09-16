const letters = ['a', 'e', 't', 'c', 'h', 'middlebar', 's', 'k'];

export function titleEffect() {
  letters.forEach(letter => {
    const selector = `[data-${letter}]`;
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
      el.addEventListener("mouseenter", () => {
        el.src = `Images/Transformed-Title/${letter.toUpperCase()}.png`;
      });

      el.addEventListener("mouseleave", () => {
        el.src = `Images/Title/${letter.toLowerCase()}.png`;
        el.style.transform = "translateX(3px)";
      });
    });
  });
}
