const evaluationForm = document.getElementById('evaluation-form');
const inputEmailHeader = document.getElementById('input-email-header');
const inputSenha = document.getElementById('input-senha');
const buttonFormLogin = document.getElementById('button-form');
const buttonForm = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');
buttonForm.disabled = true;
const inputTextarea = document.getElementById('textarea');
const getCounter = document.getElementById('counter');
const inputFormEmail = document.getElementById('input-email');
const inputFormName = document.getElementById('input-name');
const inputFormLastName = document.getElementById('input-lastname');
const inputFormCasa = document.getElementById('house');
const inputFormComentario = document.getElementById('textarea');
const inputNomeContainer = document.getElementById('input-nome-container');
const inputEmailContainer = document.getElementById('input-email-container');
const inputFamilyContainer = document.getElementById('input-family-container');
const inputConteudoContainer = document.getElementById('input-conteudo-container');
const inputAvaliacaoContainer = document.getElementById('input-avaliacao-container');
const inputComentarioContainer = document.getElementById('input-comentario-container');
const inputAgreementContainer = document.getElementById('input-agreement-container');
const inputSubmitContainer = document.getElementById('input-submit-container');

function formValidade() {
  const inputEmailValue = inputEmailHeader.value;
  const inputSenhaValue = inputSenha.value;
  if (inputEmailValue === 'tryber@teste.com' && inputSenhaValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonFormLogin.addEventListener('click', formValidade);

function presskey() {
  if (checkboxAgreement.checked) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
}

checkboxAgreement.addEventListener('change', presskey);

/* Referência para resolver a questão 18
https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/#:~:text=A%20melhor%20maneira%20de%20fazer,alternar%20seu%20estado%20on%20%2F%20off%20.
*/

function counter() {
  getCounter.innerHTML = 500;
  let span = getCounter.innerText;
  const limite = inputTextarea.value;
  for (let index = 0; index < limite.length; index += 1) {
    parseInt(span -= 1, 10);
  }
  getCounter.innerHTML = span;
}

inputTextarea.addEventListener('input', counter);

function armazenaConteudo() {
  const conteudo = document.getElementsByClassName('subject');
  const armazena = [];
  for (let index = 0; index < conteudo.length; index += 1) {
    if (conteudo[index].checked) {
      armazena.push(conteudo[index].value);
    }
  }
  return armazena.join(', ');
}

function changeDados(event) {
  event.preventDefault();
  const inputFormFamily = document.querySelector('input[name="family"]:checked').value;
  const inputFormAvaliacao = document.querySelector('input[name="rate"]:checked').value;
  inputNomeContainer.innerHTML = `Nome: ${inputFormName.value} ${inputFormLastName.value}`;
  inputEmailContainer.innerHTML = `Email: ${inputFormEmail.value} Casa: ${inputFormCasa.value}`;
  inputFamilyContainer.innerHTML = `Família: ${inputFormFamily}`;
  inputConteudoContainer.innerHTML = `Matérias: ${armazenaConteudo()}`;
  inputAvaliacaoContainer.innerHTML = `Avaliação: ${inputFormAvaliacao}`;
  inputComentarioContainer.innerHTML = `Observações: ${inputFormComentario.value}`;
  inputAgreementContainer.innerHTML = '';
  inputSubmitContainer.innerHTML = '';
}

evaluationForm.addEventListener('submit', changeDados);
// finalizado
