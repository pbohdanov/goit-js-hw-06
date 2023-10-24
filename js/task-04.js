const counterValue = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let count = 0;

incrementButton.addEventListener('click', () => {
  count += 1;
  counterValue.textContent = count;
});

decrementButton.addEventListener('click', () => {
  count -= 1;
  counterValue.textContent = count;
});
