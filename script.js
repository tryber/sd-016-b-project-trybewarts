const btnSubmit = document.getElementById('btn-submit');
const inputLogin = document.querySelectorAll('input');
const agreement = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');
const counterArea = document.getElementById('counter');
const textArea = document.getElementsByTagName('textarea');
const form = document.getElementById('evaluation-form');
const selectHouse = document.getElementById('house');
const sendName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const sendMail = document.getElementById('input-email');

function login() {
  if (inputLogin[0].value === 'tryber@teste.com' && inputLogin[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function disableButton() {
  if (agreement.checked === false) {
    sendButton.disabled = true;
  }
}

function activeButton() {
  if (agreement.checked === true) {
    sendButton.disabled = false;
  }
  if (agreement.checked === false) {
    sendButton.disabled = true;
  }
}

function characterCount() {
  let count = 500;
  for (let index = 0; index < textArea[0].textLength; index += 1) {
    count -= 1;
    counterArea.innerText = count;
  }
  if (textArea[0].textLength === 0) {
    counterArea.innerText = 500;
  }
}

const isBoxChecked = () => {
  const boxes = document.getElementsByClassName('subject');
  const arr = [];
  for (let index = 0; index < boxes.length; index += 1) {
    if (boxes[index].checked === true) {
      arr.push(boxes[index].value);
    }
  }
  return arr;
};

const isRadioChecked = () => {
  const frontEnd = document.getElementById('frontend');
  const backEnd = document.getElementById('backend');
  const fullStack = document.getElementById('fullStack');
  const family = [frontEnd, backEnd, fullStack];
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      return family[index].value;
    }
  }
};

const isScoreChecked = () => {
  const evaluation = document.getElementsByClassName('label-rate');
  for (let index = 1; index < evaluation[0].children.length; index += 1) {
    if (evaluation[0].children[index].checked === true) {
      return evaluation[0].children[index].value;
    }
  }
};

btnSubmit.addEventListener('click', login);
agreement.addEventListener('click', activeButton);
textArea[0].addEventListener('keyup', characterCount);
sendButton.addEventListener('click', () => {
  const newText = [{
    Nome: `${sendName.value} ${lastName.value}`,
    Email: sendMail.value,
    Casa: selectHouse.value,
    Familia: isRadioChecked(),
    Materias: isBoxChecked(),
    Avaliacao: isScoreChecked(),
    Observacoes: textArea[0].value,
  }];
  form.innerText = `Nome: ${newText[0].Nome}
  Email: ${newText[0].Email}
  Casa: ${newText[0].Casa}
  Família: ${newText[0].Familia}
  Matérias: ${newText[0].Materias.join(', ')}
  Avaliação: ${newText[0].Avaliacao}
  Observações: ${newText[0].Observacoes}`;
});

window.onload = function start() {
  disableButton();
};
