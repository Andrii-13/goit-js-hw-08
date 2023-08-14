const throttle = require("lodash.throttle");

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

const user = JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? {};
localStorage.setItem(LOCAL_KEY, JSON.stringify(user));
form.elements.email.value =
  JSON.parse(localStorage.getItem(LOCAL_KEY)).email ?? '';
form.elements.message.value =
  JSON.parse(localStorage.getItem(LOCAL_KEY)).message ?? '';

form.addEventListener('input', throttle(handlerMail, 500));
form.addEventListener('input', throttle(handlerMes, 500));
form.addEventListener('submit', handlerSubmit);

function handlerMail(e) {
  if (e.target.name === 'email') {
    user.email = e.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(user));
  }
}

function handlerMes(e) {
  if (e.target.name === 'message') {
    user.message = e.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(user));
  }
}

function handlerSubmit(e) {
  e.preventDefault();
  console.log(user);
  localStorage.removeItem(LOCAL_KEY);
  form.elements.email.value = '';
  form.elements.message.value = '';
}
