const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botaoLogin = document.querySelector('#botaoLogin');
const checkBoxTermo = document.querySelector('#agreement');
const botaoEnviar = document.querySelector('#submit-btn');

// Varifica se o e-mail e senha estão corretos
function varificaUsuario() {
  const loginDigitado = email.value;
  const senhaDigitada = senha.value;

  if (loginDigitado === 'tryber@teste.com' && senhaDigitada === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', varificaUsuario);

// habilita / desabilita se o checkbox estiver marcado/desmarcado
botaoEnviar.disabled = true;

function verificaCheckTermo() {
  if (checkBoxTermo.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

checkBoxTermo.addEventListener('click', verificaCheckTermo);
