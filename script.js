const getButtonLogin = document.querySelector('#login');
const getMail = document.querySelector('.email');
const getInputPassword = document.querySelector('.password');
const getTextArea = document.querySelector('#textarea');
const getCountArea = document.querySelector('#counter');
const getCheck = document.querySelector('#agreement');
const butSubmit = document.querySelector('#submit-btn');
const getFormulario = document.querySelector('.formulario');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputSelect = document.querySelector('#house');
const inputFamily = document.querySelectorAll('.capturar');
const getMateria = document.querySelectorAll('.subject');
const getNotas = document.querySelectorAll('.getAllNotas');

function login() {
  if (getMail.value === 'tryber@teste.com' && getInputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function changeButton() {
  if (butSubmit.disabled === false) {
    butSubmit.disabled = true;
  } else {
    butSubmit.disabled = false;
  }
}

let valor = '';
let newValue = '';

function countador() {
  const valorFinal = 500;
  valor = getTextArea.value;
  newValue = valorFinal - valor.length;
  getCountArea.innerHTML = newValue;
}

function getNameAndLast() {
  const localizaName = document.querySelector('#nome');
  localizaName.innerHTML = `'Nome: ${inputName.value} ${inputLastName.value}`;
}

function getEmail() {
  const localizaEmail = document.querySelector('#mail');
  localizaEmail.innerHTML = `Email: ${inputEmail.value}`;
}

function getCasa() {
  const localizaCasa = document.querySelector('#casa');
  localizaCasa.innerHTML = `Casa: ${inputSelect.value}`;
}

function getFamily() {
  const localizaFamily = document.querySelector('#familia');
  for (let index = 0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      localizaFamily.innerText = `Família: ${inputFamily[index].value}`;
    }
  }
}

function getMaterias() {
  const localizaMaterias = document.querySelector('#materia');
  const newArray = [];
  for (let i = 0; i < getMateria.length; i += 1) {
    if (getMateria[i].checked) {
      newArray.push(` ${getMateria[i].value}`);
    }
  }
  localizaMaterias.innerText = `Matérias: ${newArray}`;
}

function getAvaliacao() {
  const localizaNota = document.querySelector('#avaliacao');
  for (let index = 0; index < getNotas.length; index += 1) {
    if (getNotas[index].checked) {
      localizaNota.innerText = `Avaliação: ${getNotas[index].value}`;
    }
  }
}

function getTextAreaInput() {
  const localizaTextArea = document.querySelector('#obs');
  const pegaTexto = getTextArea.value;
  localizaTextArea.innerText = `Observações: ${pegaTexto}`;
}

function alteraText() {
  const alteraDiv = document.querySelector('.substituir');
  alteraDiv.style.display = 'block';
  getFormulario.style.display = 'none';
}

function defautButton(event) {
  event.preventDefault();
  getNameAndLast();
  getEmail();
  getCasa();
  getFamily();
  getMaterias();
  getAvaliacao();
  getTextAreaInput();
  alteraText();
}

butSubmit.addEventListener('click', defautButton);
getCheck.addEventListener('change', changeButton);
getButtonLogin.addEventListener('click', login);
getTextArea.addEventListener('input', countador);
