const magicBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body')
const magicValue = document.querySelector('.color')

magicBtn.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() { 
    bodyEl.style.backgroundColor = magicValue.textContent = getRandomHexColor();
}