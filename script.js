const sendButton = document.querySelector('#btn-entrar');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkBox = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const count = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');

function validateLog(event) {
  event.preventDefault();
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const submitButton = document.querySelector('#submit-btn');

function enableButton() {
  submitButton.disabled = false;
}

function disableButton() {
  submitButton.disabled = true;
}

count.innerText = textArea.maxLength;

function countTextArea() {
  textArea.addEventListener('input', () => {
    const size = textArea.value.length;
    count.innerText = textArea.maxLength - size;
  });
}

function getName(arrayOfObjects) {
  const firstName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  arrayOfObjects.push({ label: 'Nome:', value: `${firstName} ${lastName}` });
}

function getEmail(arrayOfObjects) {
  const userEmail = document.querySelector('#input-email').value;
  arrayOfObjects.push({ label: 'Email:', value: userEmail });
}

function getHouse(arrayOfObjects) {
  const house = document.querySelector('#house').value;
  arrayOfObjects.push({ label: 'Casa:', value: house });
}

function getFamily(arrayOfObjects) {
  const families = document.getElementsByName('family');
  for (let index = 0; index < families.length; index += 1) {
    if (families[index].checked === true) {
      arrayOfObjects.push({ label: 'Família:', value: families[index].value });
    }
  }
}

function getSubject(arrayOfObjects) {
  const checkBoxes = [];
  const content = document.querySelectorAll('.subject');
  for (let index = 0; index < content.length; index += 1) {
    if (content[index].checked === true) {
      checkBoxes.push(` ${content[index].value}`);
    }
  }
  arrayOfObjects.push({ label: 'Matérias:', value: checkBoxes });
}

function getEvaluation(arrayOfObjects) {
  const evaluations = document.getElementsByName('rate');
  for (let index = 0; index < evaluations.length; index += 1) {
    if (evaluations[index].checked === true) {
      arrayOfObjects.push({ label: 'Avaliação:', value: evaluations[index].value });
    }
  }
}

function getComment(arrayOfObjects) {
  const comment = document.querySelector('#textarea').value;
  arrayOfObjects.push({ label: 'Observações:', value: comment });
}

function removeChildForm() {
  // https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
}

function showData() {
  const arrayOfObjects = [];
  getName(arrayOfObjects);
  getEmail(arrayOfObjects);
  getHouse(arrayOfObjects);
  getFamily(arrayOfObjects);
  getSubject(arrayOfObjects);
  getEvaluation(arrayOfObjects);
  getComment(arrayOfObjects);
  removeChildForm();
  for (let index = 0; index < arrayOfObjects.length; index += 1) {
    const childSection = document.createElement('section');
    childSection.innerText = `${arrayOfObjects[index].label} ${arrayOfObjects[index].value}`;
    form.appendChild(childSection);
  }
}

window.onload = () => {
  sendButton.addEventListener('click', validateLog);
  disableButton();
  checkBox.addEventListener('click', () => {
    enableButton();
  });
  countTextArea();
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    showData();
  });
};
