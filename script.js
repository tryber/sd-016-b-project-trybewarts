// utilities
const q = (par) => document.querySelector(par);
const qAll = (par) => document.querySelectorAll(par);
const appendToChild = (element, tag, text) => {
  const stuf = document.createElement(tag);
  stuf.innerText = text;
  element.appendChild(stuf);
};

const email = q('#email');
const senha = q('#senha');
const entrar = q('#entrar');
const agreement = q('.agreement-container');
const submit = q('#submit-btn');
const textarea = q('#textarea');
const radioButtons = qAll('.radio-buttons');
const checkboxLectures = qAll('.subject');
const radioRate = qAll('.radio-rate');
const evaluationForm = q('#evaluation-form');

const dados = {};

const validateEmail = (e) => {
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const ableButton = () => {
  if (submit.disabled === true) submit.disabled = false;
  else submit.disabled = true;
};

const counter = () => {
  let count = 500;
  const charact = textarea.value.length;
  count -= charact;
  q('#counter').innerText = count;
};

const getChecked = (array) => {
  const returnedValue = [];
  for (let i = 0; i < array.length; i += 1) {
    const el = array[i];
    if (el.checked === true) {
      // el.className += ' subject';
      returnedValue.push(el.value);
    }
  }
  return returnedValue;
};

const getData = (e) => {
  e.preventDefault();
  dados.name = q('#input-name').value;
  dados.lastname = q('#input-lastname').value;
  dados.email = q('#input-email').value;
  dados.house = q('#house').value;
  dados.family = getChecked(radioButtons);
  dados.lectures = getChecked(checkboxLectures);
  dados.rate = getChecked(radioRate);
  localStorage.setItem('text', textarea.value);
};

const replaceForm = () => {
  evaluationForm.innerHTML = '';
  appendToChild(evaluationForm, 'p', `Nome: ${dados.name} ${dados.lastname}`);
  appendToChild(evaluationForm, 'p', `Email: ${dados.email}`);
  appendToChild(evaluationForm, 'p', `Casa: ${dados.house}`);
  appendToChild(evaluationForm, 'p', `Família: ${dados.family}`);
  appendToChild(evaluationForm, 'p', `Matérias: ${dados.lectures.join(', ')}`);
  appendToChild(evaluationForm, 'p', `Avaliação: ${dados.rate}`);
  appendToChild(evaluationForm, 'p', `Observações: ${localStorage.getItem('text')}`);
};

entrar.addEventListener('click', validateEmail);
submit.addEventListener('click', getData);
submit.addEventListener('click', replaceForm);
agreement.addEventListener('change', ableButton);
textarea.addEventListener('input', counter);

//requisito 21 tá troll ctz
