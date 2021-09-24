function entrar() {
  const email = document.querySelector('#login-email').value;
  const senha = document.querySelector('#login-senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') alert('Olá, Tryber!');
  else alert('Email ou senha inválidos.');
}

function habilitaEnviar() {
  document.querySelector('#submit-btn').disabled = !document.querySelector('#agreement').checked;
}

function enviar() {
  alert('enviado.');
}

function contador() {
  document.querySelector(
    '#counter',
  ).innerText = 500 - document.querySelector('#textarea').textLength;
}

function configurar() {
  document.querySelector('#botao-entrar').addEventListener('click', entrar);
  document.querySelector('#submit-btn').addEventListener('click', enviar);
  document.querySelector('#agreement').addEventListener('click', habilitaEnviar);
  document.querySelector('#textarea').addEventListener('keyup', contador);
  habilitaEnviar();
  contador();
}

window.onload = configurar;

// Deixar a linha no final pra resolver o lint
