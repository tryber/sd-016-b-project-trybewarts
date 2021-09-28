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

function getSubject() {
  const subject = document.querySelectorAll('input[class="subject form-check-input"]:checked');
  const subjectChecked = [];
  for (let index = 0; index < subject.length; index += 1) {
    subjectChecked.push(` ${subject[index].value}`);
  }
  return subjectChecked;
}

function getValues() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const inputs = [
    `${name} ${lastName}`,
    document.getElementById('input-email').value,
    document.getElementById('house').value,
    document.querySelector('input[name="family"]:checked').value,
    getSubject(),
    document.querySelector('input[name="rate"]:checked').value,
    document.getElementById('textarea').value,
  ];
  return inputs;
}

function writeInputs(array, local) {
  const descriptions = [
    'Nome: ',
    'Email: ',
    'Casa: ',
    'Família: ',
    'Matérias: ',
    'Avaliação: ',
    'Observações: ',
  ];
  for (let index = 0; index < array.length; index += 1) {
    const createP = document.createElement('p');
    local.appendChild(createP);
    createP.innerText = `${descriptions[index]}${array[index]}`;
    createP.className = 'text-start';
  }
}

function updates(event) {
  event.preventDefault();
  const inputsForm = getValues();
  const getForm = document.getElementById('evaluation-form');
  getForm.innerHTML = '';
  writeInputs(inputsForm, getForm);
}

window.onload = function () {
  const btnLogin = document.getElementById('login');
  btnLogin.addEventListener('click', validateLogin);

  checkAgreement.addEventListener('click', checkAgreementFunc);

  inputTextarea.addEventListener('input', characterCounter);

  btnToSend.addEventListener('click', updates);
};
