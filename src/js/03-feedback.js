import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email, message } = form.elements;

function getInputData(event) {
  const inputData = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputData));
}
form.addEventListener('input', throttle(getInputData, 500));

function clearStorage(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.clear();
}

form.addEventListener('submit', clearStorage);
