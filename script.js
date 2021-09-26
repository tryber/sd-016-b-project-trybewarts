function login(event) {
  event.preventDefault();

  const email = document.querySelector('.email').value;
  const senha = document.querySelector('.senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const loginButton = document.querySelector('button');

loginButton.addEventListener('click', login);

const rateContainer = document.querySelector('.rate-container');

function createRate() {
  for (let i = 1; i <= 10; i += 1) {
    const newDiv = document.createElement('div');
    const newSpan = document.createElement('span');
    const newRadio = document.createElement('input');

    newRadio.setAttribute('type', 'radio');
    newRadio.setAttribute('name', 'rate');
    newRadio.setAttribute('value', i);
    newSpan.innerText = i;

    newDiv.appendChild(newRadio);
    newDiv.appendChild(newSpan);
    rateContainer.appendChild(newDiv);
  }
}

const submitButton = document.querySelector('#submit-btn');

const agreeCheck = document.querySelector('#agreement');

function sendButton() {
  if (agreeCheck.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    const disabled = document.createAttribute('disabled');
    submitButton.setAttributeNode(disabled);
  }
}

agreeCheck.addEventListener('click', sendButton);

function submitForm(event) {
  event.preventDefault();
}

submitButton.addEventListener('click', submitForm);

window.onload = () => {
  createRate();
};

const textarea = document.querySelector('#textarea');

function countCharacters(event) {
  const count = event.target.value.length;
  const elCount = document.querySelector('#counter');

  elCount.innerText = 500 - count;

  if (elCount.innerText === '0') {
    elCount.parentElement.style.color = 'red';
  } else {
    elCount.parentElement.style.color = 'black';
  }
}

textarea.addEventListener('keyup', countCharacters);

const buttonSend = document.querySelector('#submit-btn');
const values = [];
function selectedChecked() {
  // https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript
  const language = document.querySelectorAll('[name="language"]:checked');
  for (let i = 0; i < language.length; i += 1) {
    values.push(` ${language[i].value}`);
  }
  return values;
}

const newForm = document.querySelector('#evaluation-form');
const newDiv = document.createElement('div');
buttonSend.addEventListener('click', () => {
  const result = {
    nome: document.querySelector('#input-name').value,
    lastName: document.querySelector('#input-lastname').value,
    email: document.querySelector('#input-email').value,
    house: document.querySelector('#house').value,
    family: document.querySelector('input[name="family"]:checked').value,
    language: selectedChecked(),
    rate: document.querySelector('input[name="rate"]:checked').value,
    opinion: document.querySelector('#textarea').value };
  newForm.innerHTML = '';
  newForm.appendChild(newDiv);
  newDiv.innerText = `Nome: ${result.nome} ${result.lastName}
  Email: ${result.email}
  Casa: ${result.house}
  Família: ${result.family}
  Matérias: ${result.language}
  Avaliação: ${result.rate}
  Observações: ${result.opinion}`;
});
