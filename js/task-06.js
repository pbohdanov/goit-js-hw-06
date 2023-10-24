const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const length = input.dataset.length;
  const value = input.value.trim().length;

  if (value === 0) {
    input.classList.remove('valid', 'invalid');
    return;
  }

  if (value === Number(length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});

