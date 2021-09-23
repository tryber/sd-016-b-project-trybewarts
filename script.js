const email = 'tryber@teste.com';
const senha = '123456';

const confirmar = document.getElementById('entrar');

confirmar.addEventListener('click', () => {
  const inputEmail = document.getElementById('email');
  const inputSenha = document.getElementById('senha');
  const emailDigitado = inputEmail.value;
  const senhaDigitada = inputSenha.value;
  if (email === emailDigitado && senha === senhaDigitada) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkBox = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');
buttonEnviar.disabled = true;

checkBox.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
});