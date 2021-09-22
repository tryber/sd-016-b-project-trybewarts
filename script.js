const email = document.querySelector('.email');
const password = document.querySelector('.password');
const loginButton = document.querySelector('.loginbtt');
const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

function login(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', login);

submitButton.disabled = true;

function submitBtn() {
  if (agreement.checked === true) {
    submitButton.disabled = false;
  } else submitButton.disabled = true;
}

agreement.addEventListener('click', submitBtn);
