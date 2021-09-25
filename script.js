const sendButton = document.querySelector('#btn-entrar');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkBox = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const count = document.querySelector('#counter');
const main = document.querySelector('main');

function validateLog(event) {
  event.preventDefault();
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const submitButton = document.querySelector('#submit-btn');

function enableButton() {
  submitButton.disabled = false;
}

function disableButton() {
  submitButton.disabled = true;
}

count.innerText = textArea.maxLength;

function countTextArea() {
  textArea.addEventListener('input', () => {
    const size = textArea.value.length;
    count.innerText = textArea.maxLength - size;
  });
}

const object = {};

function getName() {
  const name = document.querySelector('#input-name').value;
  object.nome = name;
}

function getLastName() {
  const lastName = document.querySelector('#input-lastname').value;
  object.ultimoNome = lastName;
}

function getEmail() {
  const userEmail = document.querySelector('#input-email').value;
  object.email = userEmail;
}

function getHouse() {
  const house = document.querySelector('#house').value;
  object.casa = house;
}

function getFamily() {
  const families = document.getElementsByName('family');
  for (let index = 0; index < families.length; index += 1) {
    if (families[index].checked === true) {
      object.familia = families[index].value;
    }
  }
}

function getSubject() {
  const checkBoxes = [];
  const content = document.querySelector('.subject');
  for (let index = 0; index < content.length; index += 1) {
    if (content[index].checked === true) {
      checkBoxes.push(content[index].value);
    }
  }
  object.materia = checkBoxes;
}

function getEvaluation() {
  const evaluations = document.getElementsByName('rate');
  for (let index = 0; index < evaluations.length; index += 1) {
    if (evaluations[index].checked === true) {
      object.avaliacao = evaluations[index].value;
    }
  }
}

function getComment() {
  const comment = document.querySelector('#textarea').value;
  object.observacoes = comment;
}
/*
function name(params) {

}
*/
window.onload = () => {
  sendButton.addEventListener('click', validateLog);
  disableButton();
  checkBox.addEventListener('click', () => {
    enableButton();
  });
  countTextArea();
  submitButton.addEventListener('click', () => {
    submitButton.preventDefault();
    getName();
    getLastName();
    getEmail();
    getHouse();
    getFamily();
    getSubject();
    getEvaluation();
    getComment();
    main.removeChild(main.firstChild);
  });
};
