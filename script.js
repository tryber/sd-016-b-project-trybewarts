const loginBtn = document.getElementById('form-submit');
const emailIpt = document.getElementById('email');
const passwordIpt = document.getElementById('password');
const formDiv4 = document.querySelector('.form-div-4');
const sendBtn = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');
const textarea = document.getElementById('textarea');
const getTextType = document.querySelectorAll('[type = text]');
const getForm = document.querySelector('#evaluation-form');

function changeEventSubmit() {
  if (emailIpt.value === 'tryber@teste.com' && passwordIpt.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

loginBtn.addEventListener('click', changeEventSubmit);

function createRadio() {
  for (let i = 1; i <= 10; i += 1) {
    const lbl = document.createElement('label');
    lbl.innerText = i;
    const radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.value = i;
    radioBtn.name = 'rate';
    formDiv4.appendChild(lbl);
    lbl.appendChild(radioBtn);
  }
}
createRadio();

function checkMarked() {
  if (agreementCheck.checked) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

agreementCheck.addEventListener('click', checkMarked);

function countWords() {
  const textCounter = document.querySelector('#counter');
  const count = 500 - textarea.value.length;
  textCounter.innerText = count;
}
textarea.addEventListener('input', countWords);

function testText() {
  const name = document.createElement('li');
  name.className = 'li';
  for (let i = 0; i < getTextType.length; i += 1) {
    if (getTextType[i].value === '') {
      return false;
    }
    name.innerText += ` ${getTextType[i].value}`;
  }
  name.innerText = `Nome:${name.innerText}`;
  return name;
}

// Obj: Understanding how the e-mail regex works ref: https://emailregex.com/
function testEmail() {
  const email = document.createElement('li');
  email.className = 'li';
  const getEmailType = document.querySelector('#input-email');
  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(getEmailType.value)) {
    return false;
  }
  email.innerText = `Email: ${getEmailType.value}`;
  return email;
}

function testHouse() {
  const house = document.createElement('li');
  house.className = 'li';
  const getSelectedOption = document.querySelector('#house');
  if (getSelectedOption.value === 'Selecione') {
    return false;
  }
  house.innerText = `Casa: ${getSelectedOption.value}`;
  return house;
}

function testFmy() {
  let count = 0;
  const family = document.createElement('li');
  family.className = 'li';
  const getSelectedOption = document.querySelectorAll('.input-radio');
  for (let i = 0; i < getSelectedOption.length; i += 1) {
    if (getSelectedOption[i].checked) {
      count += 1;
      family.innerText += ` ${getSelectedOption[i].value}`;
    }
  }
  if (count === 0) {
    return false;
  }
  family.innerText = `Família: ${family.innerText}`;
  return family;
}

function testSbj() {
  const subject = document.createElement('li');
  subject.className = 'li';
  let count = 0;
  const getSbjMarked = document.querySelectorAll('.subject');
  for (let i = 0; i < getSbjMarked.length; i += 1) {
    if (getSbjMarked[i].checked) {
      count += 1;
      subject.innerText += `${getSbjMarked[i].value}, `;
    }
  }
  if (count === 0) {
    return false;
  }
  subject.innerText = `Matérias: ${subject.innerText}`;
  subject.innerText = subject.innerText.slice(0, -2);
  return subject;
}

function testRate() {
  const rate = document.createElement('li');
  rate.className = 'li';
  let count = 0;
  const getRate = document.querySelectorAll('[name="rate"]');
  for (let i = 0; i < getRate.length; i += 1) {
    if (getRate[i].checked) {
      count += 1;
      rate.innerText += ` ${getRate[i].value}`;
    }
  }
  if (count === 0) {
    return false;
  }
  rate.innerText = `Avaliação: ${rate.innerText}`;
  return rate;
}

function testCmt() {
  const comment = document.createElement('li');
  comment.className = 'li';
  const getComment = document.querySelector('#textarea');
  if (getComment.value === '') {
    return false;
  }
  comment.innerText = `Observações: ${getComment.value}`;
  return comment;
}

function printInformationStudent() {
  const createUL = document.createElement('ul');
  for (let i = 0; i < getForm.children.length; i += 1) {
    getForm.children[i].style.display = 'none';
  }
  getForm.appendChild(createUL);
  createUL.appendChild(testText());
  createUL.appendChild(testEmail());
  createUL.appendChild(testHouse());
  createUL.appendChild(testFmy());
  createUL.appendChild(testSbj());
  createUL.appendChild(testRate());
  createUL.appendChild(testCmt());
}

function styleLI() {
  const getUL = document.getElementsByTagName('ul');
  const getLI = document.getElementsByTagName('li');
  getForm.style.alignSelf = 'flex-start';
  getUL[0].style.display = 'flex';
  getUL[0].style.flexDirection = 'column';
  getUL[0].style.alignSelf = 'flex-start';

  for (let i = 0; i < getLI.length; i += 1) {
    getLI[i].style.padding = '10px';
  }
}

function submitButton(event) {
  event.preventDefault();
  const array = [testText(), testEmail(), testHouse(), testFmy(), testSbj(), testRate(), testCmt()];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === false) {
      return alert('Favor corrigir formulário!');
    }
  }
  printInformationStudent();
  styleLI();
}

sendBtn.addEventListener('click', submitButton);
