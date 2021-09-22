const inputEmail = document.getElementById('email');
const inputPasswd = document.getElementById('senha');
const botaoLogin = document.querySelector('.button');

function button() {
  if (inputEmail.value === 'tryber@teste.com' && inputPasswd.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function chamaButton() {
  botaoLogin.addEventListener('click', button);
}

window.onload = function init() {
  chamaButton();
};
