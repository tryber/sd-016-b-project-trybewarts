function mensagemLogin(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
  const valorEmail = emailInput.value;
  const valorSenha = senhaInput.value;
  console.log(valorSenha);
  console.log(valorEmail);

  if (valorEmail === 'tryber@teste.com' && valorSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const button = document.getElementById('login');
button.addEventListener('click', mensagemLogin);

const buttonAgreement = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');
buttonAgreement.disabled = true;
function habilitaEnvio() {
  if (agree.checked === true) {
    buttonAgreement.disabled = false;
  } else {
    buttonAgreement.disabled = true;
  }
}

agree.addEventListener('click', habilitaEnvio);

function contador() {
  const texto = document.getElementById('textarea').value;
  document.getElementById('textarea').contains = texto;
  document.getElementById('counter').innerHTML = 500 - texto.length;
}
const contarTexto = document.getElementById('textarea');
contarTexto.addEventListener('input', contador);

// referência da função contador: http://www.codigoti.com.br/2018/04/javascript-contando-caracteres-dentro.html //
