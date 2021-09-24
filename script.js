const sendButton = document.querySelector('#btn-entrar');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkBox = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const count = document.querySelector('#counter');

function validateLog(event) {
  event.preventDefault();
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

/* const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', () => {

});
*/

function enableButton() {
  document.querySelector('#submit-btn').disabled = false;
}

function disableButton() {
  document.querySelector('#submit-btn').disabled = true;
}

// function verifyChecked() {
//  // console.log('hello');
//   enableButton();
// }

count.innerText = textArea.maxLength;

function countTextArea() {
  textArea.addEventListener('input', () => {
    const size = textArea.value.length;
    count.innerText = textArea.maxLength - size;
  });
}

window.onload = () => {
  sendButton.addEventListener('click', validateLog);
  disableButton();
  checkBox.addEventListener('click', () => {
    enableButton();
  });
  countTextArea();
};
