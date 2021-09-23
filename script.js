const btnSub = document.getElementById('btn-sub');
const btnSub2 = document.querySelector('#submit-btn');
const ageChckBox2 = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const paragraph = document.getElementById('counter');

function initialSet() {
  paragraph.innerText = 500;
  btnSub2.disabled = true;
}

function mater() {
  const materias = document.getElementsByClassName('subject');
  const matCheck = [];
  for (let i = 0; i < materias.length; i += 1) {
    const matAtual = materias[i];
    if (matAtual.checked) {
      matCheck.push(matAtual.value);
    }
  }
  return matCheck.join(', ');
}

function subForm(e) {
  e.preventDefault();
  const nameInput = document.querySelector('#input-name').value;
  const lastNInput = document.querySelector('#input-lastname').value;
  const eInput = document.querySelector('#input-email').value;
  const houseInput = document.querySelector('#house').value;
  const formTxt = document.querySelector('#form-txt');
  const aval = document.querySelector('input[name="rate"]:checked').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const obs = document.querySelector('#textarea').value;
  formTxt.innerText = `Nome: ${nameInput} ${lastNInput} Email: ${eInput} Casa: ${houseInput}
  Família: ${familia} Matérias: ${mater()} Avaliação: ${aval} Observações: ${obs}`;
}

function countChar() {
  const numChar = textArea.value.length;
  const count = 500 - numChar;
  paragraph.innerText = count;
}

function disable(e) {
  const eTar = e.target.checked;
  if (eTar) {
    btnSub2.disabled = false;
  } else {
    btnSub2.disabled = true;
  }
}

function email() {
  const inputEmail = document.getElementById('input__email').value;
  const inputSenha = document.getElementById('input-senha').value;
  if (inputEmail === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function loginValidate(e) {
  e.preventDefault();
  email();
}

window.onload = initialSet;
textArea.addEventListener('keyup', countChar);
ageChckBox2.addEventListener('change', disable);
btnSub.addEventListener('click', loginValidate);
btnSub2.addEventListener('click', subForm);
