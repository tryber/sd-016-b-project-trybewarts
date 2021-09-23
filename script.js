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

function verifyChecked() {
  console.log('hello');
  enableButton();
}
  let sizeArea = textArea.maxLength;
  count.innerText = sizeArea;

function countTextArea() {
  // https://www.w3schools.com/jsref/event_onkeypress.asp

  textArea.addEventListener('keydown',(event) =>{
    // https://www.digitalocean.com/community/tutorials/angular-binding-keyup-keydown-events

    if(event.key === 'Backspace') { 
      sizeArea += 1;
      checkSizeArea();
    } else {
      sizeArea -= 1;
      checkSizeArea();
    }
  });
}
function checkSizeArea() {
  if (sizeArea <= textArea.maxLength) {
    count.innerText = sizeArea;
  } else {
    sizeArea = textArea.maxLength;
  }

  if (sizeArea <= textArea.minLength) {
    sizeArea = 1;
  }
}

window.onload = () => {
  sendButton.addEventListener('click', validateLog);

  disableButton();
  checkBox.addEventListener('click', () => {
    verifyChecked();
  });
  countTextArea();
};
