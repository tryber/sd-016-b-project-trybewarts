// requisito 3 validação login e senha
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');

function validateLogin(event) {
  event.preventDefault();
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginBtn.addEventListener('click', validateLogin);

// requisito 18 adicionar evento disable
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function checkedAgreement() {
  submitBtn.toggleAttribute('disabled');
}
agreement.addEventListener('change', checkedAgreement);

// Resquisito 20 adicionar contador de caracteres
const textarea = document.getElementById('textarea');
const countCharacters = document.getElementById('counter');

function countingCharacters() {
  const counter = (500 - (textarea.value.length));
  countCharacters.innerText = counter;
}
textarea.addEventListener('keyup', countingCharacters);
