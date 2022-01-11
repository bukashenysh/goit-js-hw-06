const textInput = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');


textInput.addEventListener('input', event =>
  textInput.value === ''
    ? (nameLabel.textContent = 'Anonymous')
    : (nameLabel.textContent = event.target.value));

// const onInputChange = event =>
//   textInput.value === ''
//     ? (nameLabel.textContent = 'Anonymous')
//     : (nameLabel.textContent = event.target.value);



