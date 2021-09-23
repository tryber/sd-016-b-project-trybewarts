const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botaoLogin = document.querySelector('#botaoLogin');

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
