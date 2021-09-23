const email = document.getElementById('email');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const agreeBox = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');

function checkLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkLogin);

function disableOrEnableSendButton() {
  if (agreeBox.checked) {
    sendButton.removeAttribute('disabled');
  } else {
    sendButton.setAttribute('disabled', true);
  }
}

agreeBox.addEventListener('click', disableOrEnableSendButton);
