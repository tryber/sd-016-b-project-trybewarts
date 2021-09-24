const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.password');
const enterButton = document.querySelector('.enter');

function alerts() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
enterButton.addEventListener('click', alerts);
