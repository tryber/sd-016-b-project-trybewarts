// Função para volidar e-mail e senha

function validarSenha(event) {
  event.preventDefault();
  const inputEmail = document.querySelector('.email').value;
  const inputSenha = document.querySelector('.password').value;

  if (inputEmail === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const getBtn = document.querySelector('.bnt');
getBtn.addEventListener('click', validarSenha);

// Função habilitar/desabiitar botão
// Referencia utilizada para solicionar requisito:
// https://www.w3schools.com/jsref/prop_select_disabled.asp

const buttonSubmit = document.getElementById('submit-btn');
const inputAgreement = document.getElementById('agreement');

function enableButton() {
  if (inputAgreement.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

inputAgreement.addEventListener('click', enableButton);

// Função para contar caracteres na textarea
// Referencia utilizada para solicionar requisito:
// https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea

const textArea = document.getElementById('textarea');

function limiteTextArea() {
  const quant = 500;
  const total = textArea.value.length;
  if (total <= quant) {
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = total.substr(0, quant);
  }
}

textArea.addEventListener('keyup', limiteTextArea);
