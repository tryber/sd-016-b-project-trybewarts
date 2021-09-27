const email = document.getElementById('email');

const password = document.getElementById('password');

const checkAgreement = document.getElementById('agreement');

const btnToSend = document.getElementById('submit-btn');

btnToSend.disabled = true;

function validateLogin() {
  const emailCorrect = 'tryber@teste.com';
  const passwordCorrect = '123456';
  if ((email.value === emailCorrect) && (password.value === passwordCorrect)) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkAgreementFunc() {
  if (checkAgreement.checked) {
    btnToSend.disabled = false;
  } else {
    btnToSend.disabled = true;
  }
}

window.onload = function () {
  const btnLogin = document.getElementById('login');
  btnLogin.addEventListener('click', validateLogin);

  checkAgreement.addEventListener('click', checkAgreementFunc);
};
