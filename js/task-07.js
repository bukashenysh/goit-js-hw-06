const slideEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text')

slideEl.addEventListener('input', () => {
  // console.log(slideEl.valueAsNumber)
  textEl.style.fontSize = `${slideEl.valueAsNumber}px`
});