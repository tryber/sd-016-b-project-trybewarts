function validateCredentials(event) {
  event.preventDefault();
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

const loginButton = document.querySelector('.trybewarts-login button');
loginButton.addEventListener('click', validateCredentials);

// Requisito 14:

const divrate = document.getElementById('divrate');

function radioopt(i) {
  const radio = document.createElement('input');
  radio.id = `rate${[i]}`;
  radio.value = [i];
  radio.name = 'rate';
  radio.type = 'radio';

  return radio;
}

function labelopt(i) {
  const label = document.createElement('label');
  label.innerText = [i];
  label.htmlFor = `rate${[i]}`;

  return label;
}

function satisfactionLevel(radiobtn) {
  for (let i = 1; i <= radiobtn; i += 1) {
    const radio = radioopt(i);
    const label = labelopt(i);
    divrate.appendChild(radio);
    divrate.appendChild(label);
  }
}

satisfactionLevel(10);

// Requisito 18
const submitButton = document.getElementById('submit-btn');
submitButton.disabled = true;

function enableSubmitButton(event) {
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const agreementCheck = document.getElementById('agreement');
agreementCheck.addEventListener('change', enableSubmitButton);

// Requisito 20
const counter = document.getElementById('counter');
counter.innerText = '500';

function updateCounter(event) {
  counter.innerText = 500 - event.target.value.length;
}

const textarea = document.getElementById('textarea');
textarea.addEventListener('keyup', updateCounter);

// Requisito 21
function getInputText(id) {
  const input = document.getElementById(id);
  return input.value;
}

function getSelectedValue(selector) {
  const options = document.querySelectorAll(selector);
  for (let index = 0; index < options.length; index += 1) {
    if (options[index].selected) {
      return options[index].value;
    }
  }
  return '';
}

function getRadioValue(selector) {
  const options = document.querySelectorAll(selector);
  for (let index = 0; index < options.length; index += 1) {
    if (options[index].checked) {
      return options[index].value;
    }
  }
  return '';
}

function getSelectedSubjects(selector) {
  const subjects = document.querySelectorAll(selector);
  let selectedSubjects = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      selectedSubjects += `${subjects[index].value}, `;
    }
  }
  if (selectedSubjects.length > 0) {
    selectedSubjects = selectedSubjects.slice(0, selectedSubjects.length - 2);
  }
  return selectedSubjects;
}

function createField(tagName, text) {
  const field = document.createElement(tagName);
  field.innerText = text;
  return field;
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const evaluationForm = document.getElementById('evaluation-form');
  const responseFields = [
    createField('p', `Nome: ${getInputText('input-name')} ${getInputText('input-lastname')}`),
    createField('p', `Email: ${getInputText('input-email')}`),
    createField('p', `Casa: ${getSelectedValue('#house option')}`),
    createField('p', `Família: ${getRadioValue('input[name="family"]')}`),
    createField('p', `Matérias: ${getSelectedSubjects('.subject')}`),
    createField('p', `Avaliação: ${getRadioValue('#divrate input')}`),
    createField('p', `Observações: ${getInputText('textarea')}`),
  ];
  evaluationForm.innerHTML = '';

  for (let index = 0; index < responseFields.length; index += 1) {
    evaluationForm.appendChild(responseFields[index]);
  }
});
