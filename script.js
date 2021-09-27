const email = document.getElementById('email');

const password = document.getElementById('password');

const checkAgreement = document.getElementById('agreement');

const btnToSend = document.getElementById('submit-btn');

const inputTextarea = document.getElementById('textarea');

btnToSend.disabled = true;

function validateLogin() {
  const emailCorrect = 'tryber@teste.com';
  const passwordCorrect = '123456';
  if ((email.value === emailCorrect) && (password.value === passwordCorrect)) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checkAgreementFunc() {
  if (checkAgreement.checked) {
    btnToSend.disabled = false;
  } else {
    btnToSend.disabled = true;
  }
}

function characterCounter() {
  const total = 500;
  const typedCharacters = inputTextarea.value.length;
  const charactersRemaining = total - typedCharacters;
  document.getElementById('counter').innerText = charactersRemaining;
}

function fullNameForm() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const nameComplete = document.getElementById('name-complete');
  nameComplete.innerHTML = '';
  const createP = document.createElement('p');
  nameComplete.appendChild(createP);
  createP.innerText = `Nome: ${name} ${lastName}`;
}

function emailHouseForm() {
  const emailForm = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const getemailHouse = document.getElementById('email-house');
  getemailHouse.innerHTML = '';
  const createP = document.createElement('p');
  getemailHouse.appendChild(createP);
  createP.innerText = `Email: ${emailForm} || Casa: ${house}`;
}

function familySubjectsForm() {
  const family = document.querySelector('input[name="family"]:checked').value;
  const subject = document.querySelectorAll('input[class="subject"]:checked');
  const subjectChecked = [];
  for (let index = 0; index < subject.length; index += 1) {
    subjectChecked.push(` ${subject[index].value}`);
  }
  const familySubjects = document.getElementById('container-radio-checkbox');
  familySubjects.innerHTML = '';
  const createP = document.createElement('p');
  familySubjects.appendChild(createP);
  createP.innerText = `Família: ${family} || Matérias: ${subjectChecked}`;
}

function rateForm() {
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const avaliator = document.getElementById('avaliator-container');
  avaliator.innerHTML = '';
  const createP = document.createElement('p');
  avaliator.appendChild(createP);
  createP.innerText = `Avaliação: ${rate}`;
}

function comentForm() {
  const coment = document.getElementById('textarea').value;
  const getComentDiv = document.getElementById('comment-container');
  getComentDiv.innerHTML = '';
  const createP = document.createElement('p');
  getComentDiv.appendChild(createP);
  createP.innerText = `Observações: ${coment}`;
}

function clear() {
  const terms = document.getElementById('terms');
  const button = document.getElementById('submit-btn');
  terms.remove();
  button.remove();
}

function updates(event) {
  event.preventDefault();
  fullNameForm();
  emailHouseForm();
  familySubjectsForm();
  rateForm();
  comentForm();
  clear();
}

window.onload = function () {
  const btnLogin = document.getElementById('login');
  btnLogin.addEventListener('click', validateLogin);

  checkAgreement.addEventListener('click', checkAgreementFunc);

  inputTextarea.addEventListener('input', characterCounter);

  btnToSend.addEventListener('click', updates);
};
