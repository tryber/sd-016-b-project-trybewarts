// Constantes e variáveis globais
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formsbutton = document.querySelector('#login');
const submitBtn = document.querySelector('#submit-btn');
const agrrementBox = document.querySelector('#agreement');
const textareaCounter = document.querySelector('#textarea');
const mainContainer = document.querySelector('#mainContainer');
const imgEmblema = document.querySelector('#trybewarts-forms-logo');
// Constantes globais depois do submit
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputHouse = document.querySelector('#house');
const inputObs = document.querySelector('#textarea');
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

function clear() {
  const forms = document.getElementById('evaluation-form');
  mainContainer.removeChild(forms);
}

// Requisito 21
const fullName = document.createElement('p');
const txtEmail = document.createElement('p');
const house = document.createElement('p');
const family = document.createElement('p');
const subject = document.createElement('p');
const rate = document.createElement('p');
const obs = document.createElement('p');
const newForm = document.createElement('form');
const subjectSelected = [];

function tamoPensando() {
  const inputFamily = document.querySelector('input[name="family"]:checked').value;
  const inputSubject = document.querySelectorAll('input[class="subject"]:checked');
  const inputRate = document.querySelector('input[name="rate"]:checked').value;
  clear();
  for (let index = 0; index < inputSubject.length; index += 1) {
    subjectSelected.push(` ${inputSubject[index].value}`);
  }
  newForm.id = 'evaluation-form'; mainContainer.appendChild(newForm);
  mainContainer.insertBefore(newForm, imgEmblema);
  fullName.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  txtEmail.innerText = `Email: ${inputEmail.value}`;
  house.innerText = `Casa: ${inputHouse.value}`;
  family.innerText = `Família: ${inputFamily}`;
  subject.innerText = `Matérias: ${subjectSelected}`;
  rate.innerText = `Avaliação: ${inputRate}`; obs.innerText = `Observações: ${inputObs.value}`;
  newForm.appendChild(fullName); newForm.appendChild(txtEmail); newForm.appendChild(house);
  newForm.appendChild(family); newForm.appendChild(subject); newForm.appendChild(rate);
  newForm.appendChild(obs);
}
submitBtn.addEventListener('click', tamoPensando);
