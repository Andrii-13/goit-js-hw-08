const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

const user = JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? {};
localStorage.setItem(LOCAL_KEY, JSON.stringify(user));
form.elements.email.value =
  JSON.parse(localStorage.getItem(LOCAL_KEY)).email ?? '';
form.elements.message.value =
  JSON.parse(localStorage.getItem(LOCAL_KEY)).message ?? '';

form.addEventListener('input', throttle(handlerMail, 500));
form.addEventListener('submit', handlerSubmit);

function handlerMail(e) {
  user[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(user));
}

function handlerSubmit(e) {
  e.preventDefault();
  console.log(user);
  localStorage.removeItem(LOCAL_KEY);
  form.reset();
  user.message = '';
  user.email = '';
}
