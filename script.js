// Requisito 3
function btnSignUp() {
  const inputEmail = document.getElementById('email').value;
  const inputPassword = document.getElementById('input-password').value;
  if (inputEmail === 'tryber@teste.com' && inputPassword === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

function validateSubmit(event) {
  const btnSubmit = document.getElementById('submit-btn');
  if (event.target.checked === true) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
}

const btnClick = document.getElementById('btn-login');
btnClick.addEventListener('click', btnSignUp);

const inputAgreement = document.getElementById('agreement');
inputAgreement.addEventListener('click', validateSubmit);
