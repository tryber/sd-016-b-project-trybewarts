const emailTrybe = 'tryber@teste.com';
const passwordTrybe = '123456';
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const checkAgreement = document.getElementById('agreement');
const btnSend = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

btnLogin.addEventListener('click', () => {
  if (inputEmail.value === emailTrybe && inputPassword.value === passwordTrybe) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkAgreement.addEventListener('change', (event) => {
  if (event.target.checked) {
    btnSend.removeAttribute('disabled');
  } else {
    btnSend.setAttribute('disabled', 'disabled');
  }
});

function updateCounter() {
  const maxLenght = Number(textarea.getAttribute('maxlength'));
  const currentLenght = textarea.value.length;
  counter.innerHTML = maxLenght - currentLenght;
}
updateCounter();
