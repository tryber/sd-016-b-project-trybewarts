const btnSubmit = document.getElementById('btn-submit');
const inputLogin = document.querySelectorAll('input');
const agreement = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');
const counterArea = document.getElementById('counter');
const textArea = document.getElementsByTagName('textarea');

function login() {
  if (inputLogin[0].value === 'tryber@teste.com' && inputLogin[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function disableButton() {
  if (agreement.checked === false) {
    sendButton.disabled = true;
  }
}

function activeButton() {
  if (agreement.checked === true) {
    sendButton.disabled = false;
  }
  if (agreement.checked === false) {
    sendButton.disabled = true;
  }
}

function characterCount() {
  let count = 500;
  for (let index = 0; index < textArea[0].textLength; index += 1) {
    count -= 1;
    counterArea.innerText = count;
  }
  if (textArea[0].textLength === 0) {
    counterArea.innerText = 500;
  }
}

btnSubmit.addEventListener('click', login);
agreement.addEventListener('click', activeButton);
textArea[0].addEventListener('keyup', characterCount);

window.onload = function start() {
  disableButton();
};
