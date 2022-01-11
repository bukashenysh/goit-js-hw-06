const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value
  const password = event.currentTarget.elements.password.value

  const formData = {
    email,
    password,
  }

  if (email === '' || password === '') { 
    return window.alert('Please, fill the field!')
  }

  console.log(formData);
  form.reset();

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //   console.log(name);
  //   console.log(value);

  // })
}
