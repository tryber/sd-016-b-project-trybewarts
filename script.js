const inputEmail = document.getElementById('login-email');
const inputSenha = document.getElementById('login-senha');
const buttonEntrar = document.getElementById('btn-entrar');
const chckAgreement = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');

// Função valida email e senha, e retorna um alert
function menssagem() {
  const valueEmail = inputEmail.value;
  console.log(valueEmail);
  const valueSenha = inputSenha.value;
  console.log(valueSenha);
  if (valueEmail === 'tryber@teste.com' && valueSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEntrar.addEventListener('click', menssagem);

// Função habilita botão submit
function submitOn() {
  if (chckAgreement.checked) {
    buttonEnviar.removeAttribute('disabled');
  } else {
    buttonEnviar.setAttribute('disabled', 'disabled');
  }
}
chckAgreement.addEventListener('change', submitOn);
