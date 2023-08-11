const body = document.querySelector('body');
const container = body.querySelector('.container');
const form = container.querySelector('.sign-up');
const password = container.querySelector('.pwd-div');
const inputPwd = container.querySelector('.pwd');
const confirmPwd = container.querySelector('.pwd-confirm');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (inputPwd.value !== confirmPwd.value || inputPwd.value === '' || confirmPwd.value === '') {
    password.classList.add('dontMatch');
    password.classList.remove('match');
    inputPwd.style.cssText = 'border: 1px solid tomato;';
    confirmPwd.style.cssText = 'border: 1px solid tomato;';
  } else if (inputPwd.value == confirmPwd.value) {
    password.classList.add('match');
    password.classList.remove('dontMatch');
    inputPwd.style.cssText = 'border: 1px solid green;';
    confirmPwd.style.cssText = 'border: 1px solid green;';
  }
});
