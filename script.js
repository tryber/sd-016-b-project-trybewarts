const loginButton = document.querySelector('.loginBtn');
const emaillUser = document.querySelector('.user-email');
const userPassword = document.querySelector('.user-password');
const agreeBox = document.querySelector('#agreement');
const subtmitButton = document.querySelector('#submit-btn');
subtmitButton.disabled = true;

loginButton.addEventListener('click', () => {
  if (emaillUser.value === 'tryber@teste.com' && userPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreeBox.addEventListener('click', (evt) => {
  if (evt.target.checked === true) {
    subtmitButton.disabled = false;
  } else {
    subtmitButton.disabled = true;
  }
});
