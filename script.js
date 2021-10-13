// Requisito 3 - identificando valores de input
// no email e senha

const inputEmail = document.querySelector('#email');
const inputPass = document.querySelector('#password');
const botaoEntrar = document.querySelector('#botaoEntrar');

function validarInput() {
  if (inputEmail.value !== 'tryber@teste.com' && inputPass.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

botaoEntrar.addEventListener('click', validarInput);

// Requisito 18
// dica tirada do site:
// https://thisinterestsme.com/disable-button-checkbox-checked/
const checkbox = document.querySelector('#agreement');
const botaoEnviar = document.querySelector('#submit-btn');
function checkEnable() {
  if (checkbox.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}
checkbox.addEventListener('click', checkEnable);

// requisito 20
// const textMaxLenght = document.querySelector('#textarea-id').maxLength;
const textArea = document.querySelector('#textarea');
const charsRestantes = document.querySelector('#counter');
const counter = 500;
charsRestantes.innerHTML = counter;

function contador(chars) {
  const len = textArea.value.length;
  if (len >= counter) {
    chars.preventDefault();
  } else {
    charsRestantes.innerHTML = counter - len;
  }
}

textArea.addEventListener('input', contador);

// Exercício 21
function inputRadioValue(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].checked) {
      return arr[i].value;
    }
  }
}
function inputCheckboxValue(arr) {
  const aux = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].checked) {
      aux.push(arr[i].value);
    }
  }
  return aux;
}
function criaParagrafo(value, name) {
  return `<p>${name}: ${value}</p>`;
}
function enviarFormulario() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const nomeCompleto = `${nome} ${sobrenome}`;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const comentario = document.getElementById('textarea').value;
  const familia = inputRadioValue(document.getElementsByName('family'));
  const conteudo = inputCheckboxValue(document.getElementsByName('conteudo'));
  const rate = inputRadioValue(document.getElementsByName('rate'));
  const form = document.getElementById('evaluation-form');
  let p = criaParagrafo(nomeCompleto, 'Nome');
  p += criaParagrafo(email, 'Email');
  p += criaParagrafo(casa, 'Casa');
  p += criaParagrafo(familia, 'Família');
  p += criaParagrafo(conteudo.join(', '), 'Matérias');
  p += criaParagrafo(rate, 'Avaliação');
  p += criaParagrafo(comentario, 'Observações');
  form.innerHTML = p;
}

botaoEnviar.addEventListener('click', enviarFormulario);

