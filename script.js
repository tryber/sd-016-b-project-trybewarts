const loginButton = document.querySelector('button');
const login = document.querySelectorAll('input')[0];
const password = document.querySelectorAll('input')[1];
loginButton.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submitBtn = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
submitBtn.disabled = true;
checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const textarea = document.querySelector('#textarea');
const paragraph = document.querySelector('#counter');
textarea.addEventListener('input', () => {
  const maxValue = 500;
  const caracteres = maxValue - textarea.value.length;
  paragraph.innerHTML = caracteres;
});
