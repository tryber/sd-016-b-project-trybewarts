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
  }
}

textarea.addEventListener('keyup', countCharacters);
