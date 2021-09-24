const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botaoLogin = document.querySelector('#botaoLogin');
const checkBoxTermo = document.querySelector('#agreement');
const botaoEnviar = document.querySelector('#submit-btn');
const comentario = document.querySelector('#textarea');
const contagem = document.querySelector('#counter');

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
// fonte de como habilitar/desabilitar o botão:
// https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/#:~:text=A%20melhor%20maneira%20de%20fazer,alternar%20seu%20estado%20on%20%2F%20off%20.

botaoEnviar.disabled = true;

function verificaCheckTermo() {
  if (checkBoxTermo.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

checkBoxTermo.addEventListener('click', verificaCheckTermo);

// conta quantos caracteres tem escrito em comentarios
contagem.innerHTML = 500;

function contaCaracter() {
  const QtdCaracter = comentario.value.length;
  contagem.innerHTML = (500 - QtdCaracter);
}

comentario.addEventListener('keyup', contaCaracter);
