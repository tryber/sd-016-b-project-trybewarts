const botaoLogin = document.getElementsByClassName('botao-login')[0];
const inputEmail = document.getElementById('email-login');
const inputPassword = document.getElementById('password-login');
const botaoSubmit = document.getElementById('submit-btn');
const agreed = document.getElementById('agreement');
const areaContador = document.querySelector('#textarea');

function checkLogin() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function disable() {
  if (agreed.checked) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
}

agreed.addEventListener('change', disable);
botaoLogin.addEventListener('click', checkLogin);

function contador() {
  const contadorValor = document.querySelector('#textarea').textLength;
  const number = 500 - contadorValor;
  document.querySelector('#counter').innerHTML = number;
}
areaContador.addEventListener('keyup', contador);
