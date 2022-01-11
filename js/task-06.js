const inputText = document.querySelector('#validation-input');

const rightLength = inputText.dataset.length

inputText.addEventListener('blur', onInputBlur => {
  const text = onInputBlur.target.value;

  if (text.length === +rightLength) {
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');
  } else {
    inputText.classList.remove('valid');
    inputText.classList.add('invalid');
  }
});
