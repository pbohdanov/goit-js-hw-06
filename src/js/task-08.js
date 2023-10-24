const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  const formData = { email, password };
  console.log(formData);

  form.reset();
});

