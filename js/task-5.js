function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElement = document.querySelector(`.change-color`);
btnElement.addEventListener(`click`, btnClick);

function btnClick(event) {
  const bodyEl = document.body;
  const textEl = document.querySelector(`.color`);
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  textEl.textContent = newColor;
}