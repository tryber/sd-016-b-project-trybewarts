const inputEmail = document.getElementById('email-input');
const inputPassword = document.getElementById('password-input');
const btnSubmitLogin = document.getElementById('btn-submit-login');
const checkAgreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');
const formContent = document.getElementById('form-content');
const btnSubmit = document.getElementById('submit-btn');

function verifyData(event) {
  event.preventDefault();
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  if ((emailValue.trim() === '' || emailValue.split('').includes('@') === false)
  || passwordValue !== '123456') {
    window.alert('Email ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
}

function ableBtn() {
  if (checkAgreement.checked === true) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
}

function charCounter() {
  const counter = document.getElementById('counter');
  if (textArea.value.length === 0) {
    counter.innerHTML = 500;
  } else {
    counter.innerHTML = 500 - textArea.value.length;
  }
}

function verifyInputRadioFamily() {
  const family = document.querySelectorAll('input[name=family]:checked');
  let familyChecked = '';
  for (let i = 0; i < family.length; i += 1) {
    familyChecked = family[i].value;
  }
  return familyChecked;
}

function verifyInputContent() {
  const array = ['  HoFs', ' Jest', ' Promises', ' React', ' SQL', ' Python'];
  const contentChecked = [];
  for (let i = 0; i < array.length; i += 1) {
    if (document.querySelectorAll('input[name=content]')[i].checked === true) {
      contentChecked.push(array[i]);
    }
  }
  return contentChecked;
}

function verifyRateInput() {
  const rate = document.querySelectorAll('input[name=rate]:checked');
  let rateChecked = '';
  for (let i = 0; i < rate.length; i += 1) {
    rateChecked = rate[i].value;
  }
  return rateChecked;
}

function getContent() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = verifyInputRadioFamily();
  const contentInput = verifyInputContent();
  const rate = verifyRateInput();
  const observation = textArea.value;
  const contentForm = [name, lastName, email, house, family, contentInput, rate, observation];
  return contentForm;
}

function hiddeFormAndShowContent() {
  formContent.style.display = 'flex';
}

function clearForm() {
  while (form.firstChild) {
    form.removeChild(form.lastChild);
  }
}

function createFormContentParagraph() {
  const divContent = document.createElement('div');
  divContent.className = 'form-content';
  form.appendChild(divContent);
  for (let i = 0; i < 7; i += 1) {
    const paragraph = document.createElement('p');
    paragraph.className = 'contentParagraph';
    divContent.appendChild(paragraph);
  }
}

function appendInnerHtml(contentValues) {
  const contentParagraph = document.getElementsByClassName('contentParagraph');
  contentParagraph[0].innerHTML = `Nome: ${contentValues[0]} ${contentValues[1]}`;
  contentParagraph[1].innerHTML = `Email: ${contentValues[2]}`;
  contentParagraph[2].innerHTML = `Casa: ${contentValues[3]}`;
  contentParagraph[3].innerHTML = `Família: ${contentValues[4]}`;
  contentParagraph[4].innerHTML = `Matérias:${contentValues[5]}`;
  contentParagraph[5].innerHTML = `Avaliação: ${contentValues[6]}`;
  contentParagraph[6].innerHTML = `Observações: ${contentValues[7]}`;
}

function createFormContent(event) {
  event.preventDefault();
  const contentValues = getContent();
  clearForm();
  hiddeFormAndShowContent();
  createFormContentParagraph();
  appendInnerHtml(contentValues);
}
window.onload = () => {
  checkAgreement.addEventListener('click', ableBtn);
  btnSubmitLogin.addEventListener('click', verifyData);
  textArea.addEventListener('keyup', charCounter);
  btnSubmit.addEventListener('click', createFormContent);
};
