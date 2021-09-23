// Requisito 3 - Login e senha
const loginInput = document.getElementById('inputLogin');
const passwordInput = document.getElementById('inputPassword');
const loginButton = document.getElementById('loginBtn');

function loginCheck() {
  loginButton.addEventListener('click', () => {
    if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
loginCheck();

// Requisito 18 - Condição para o checkbox
const checkButton = document.getElementById('agreement');

function sendValidation() {
  checkButton.addEventListener('click', () => {
    const checkBox = document.getElementById('submit-btn');
    if (checkButton.checked === true) {
      checkBox.removeAttribute('disabled');
    } else {
      checkBox.setAttribute('disabled', 'disabled');
    }
  });
}
sendValidation();

// Requisito 20 - Contador textarea
const textAreaIn = document.getElementById('textarea');
const counter = document.getElementById('counter');

function currentCount() {
  textAreaIn.addEventListener('keyup', () => {
    counter.innerHTML = 500 - textAreaIn.value.length;
  });
}
currentCount();
