const email = document.querySelector('#input-email-login');
const senha = document.querySelector('#input-senha');
const loginBtn = document.querySelector('#login-btn');

function checkEmail() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', checkEmail);
