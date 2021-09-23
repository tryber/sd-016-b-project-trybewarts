const botaoLogin = document.getElementsByClassName('botao-login')[0];
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const botaoSubmit = document.getElementById('submit-btn');
const agreed = document.getElementById('agreement');

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