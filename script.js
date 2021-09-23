// Constantes e variáveis globais
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formsbutton = document.querySelector('#login');
const submitBtn = document.querySelector('#submit-btn');
const agrrementBox = document.querySelector('#agreement');
const textareaCounter = document.querySelector('#textarea');

// Funções
// Alerta do email
function emailAlert() {
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
formsbutton.addEventListener('click', emailAlert);

// Habilitação do botão enviar
// https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/input_event
function submit() {
  if (submitBtn.disabled === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agrrementBox.addEventListener('input', submit);

function counter(event) {
  const counterSpan = document.querySelector('#counter');
  const max = event.target.getAttribute('maxlength');
  const currentLength = event.target.value.length;
  counterSpan.innerText = `${max - currentLength}`;
}
textareaCounter.addEventListener('input', counter);
