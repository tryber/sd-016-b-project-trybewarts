const loginButton = document.querySelector('.loginBtn');
const emaillUser = document.querySelector('.user-email');
const userPassword = document.querySelector('.user-password');
const agreeBox = document.querySelector('#agreement');
const subtmitButton = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const limit = 500;
subtmitButton.disabled = true;

loginButton.addEventListener('click', () => {
  if (emaillUser.value === 'tryber@teste.com' && userPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreeBox.addEventListener('click', (evt) => {
  if (evt.target.checked === true) {
    subtmitButton.disabled = false;
  } else {
    subtmitButton.disabled = true;
  }
});

textArea.addEventListener('input', () => {
  counter.innerText = limit - textArea.value.length;
});
