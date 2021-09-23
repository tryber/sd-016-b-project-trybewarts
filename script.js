const email = document.getElementById('email');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');

function checkLogin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkLogin);
