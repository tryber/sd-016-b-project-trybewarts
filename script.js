const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');
const sendButton = document.querySelector('#submit-btn');
const agreementChecked = document.querySelector('#agreement');

function validarEmailSenha() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao.addEventListener('click', validarEmailSenha);

function radioChecked() {
  if (agreementChecked.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}
agreementChecked.addEventListener('click', radioChecked);
