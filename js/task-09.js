function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

randomColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;

});
