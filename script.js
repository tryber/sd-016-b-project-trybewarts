function isValidEmail() {
  const email = document.getElementById('email-input');
  return email.value === 'tryber@teste.com';
}

function isValidPassword() {
  const password = document.getElementById('password-input');
  return password.value === '123456';
}

function loginSuccess() {
  alert('Olá, Tryber!');
}

function loginFail() {
  alert('Email ou senha inválidos.');
}

function validateForm() {
  if (isValidEmail() && isValidPassword()) {
    loginSuccess();
  } else {
    loginFail();
  }
}

function addFormEvents() {
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', () => {
    validateForm();
  });
}

function addAgreementEvent() {
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('input', (evt) => {
    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = !evt.target.checked;
  });
}

function addCommentEvents() {
  const textarea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  // Lógica para contar, por Etienne Martin, encontrada em:
  // https://stackoverflow.com/questions/14086398/count-textarea-characters/43837521#43837521
  textarea.addEventListener('input', (evt) => {
    const target = evt.currentTarget;
    const maxLength = target.getAttribute('maxlength');
    const currentLength = target.value.length;
    counter.innerText = `${maxLength - currentLength}`;
  });
}

function createParagraph(prefix, value) {
  const newParagraph = document.createElement('p');
  newParagraph.innerText = `${prefix} ${value}`;
  return newParagraph;
}

function replaceFullname() {
  const nameInput = document.getElementById('input-name');
  const lastnameInput = document.getElementById('input-lastname');
  return createParagraph('Nome:', `${nameInput.value} ${lastnameInput.value}`);
}

function replaceEmail() {
  const emailInput = document.getElementById('input-email');
  return createParagraph('Email:', emailInput.value);
}

function replaceHouse() {
  const house = document.getElementById('house');
  return createParagraph('Casa:', house.value);
}

function replaceFamily() {
  const family = document.querySelector('input[name="family"]:checked');
  return createParagraph('Família:', family.value);
}

function createContentValue(idsList) {
  const contentValueList = [];
  for (let i = 0; i < idsList.length; i += 1) {
    const element = document.getElementById(idsList[i]);
    if (element.checked) contentValueList.push(element.value);
  }
  return contentValueList.join(', ');
}

function replaceContent() {
  return createParagraph('Matérias:', createContentValue([
    'hofs',
    'jest',
    'promises',
    'react',
    'sql',
    'python',
  ]));
}

function replaceRate() {
  const rate = document.querySelector('input[name="rate"]:checked');
  return createParagraph('Avaliação:', rate.value);
}

function replaceComment() {
  const comment = document.getElementById('textarea');
  return createParagraph('Observações:', comment.value);
}

function clearForm() {
  const form = document.getElementById('evaluation-form');
  form.innerHTML = '';
}

function appendToForm(argsList) {
  const form = document.getElementById('evaluation-form');
  for (let i = 0; i < argsList.length; i += 1) {
    form.appendChild(argsList[i]);
  }
}

function replaceForm() {
  const fullName = replaceFullname();
  const email = replaceEmail();
  const house = replaceHouse();
  const family = replaceFamily();
  const content = replaceContent();
  const rate = replaceRate();
  const comment = replaceComment();
  clearForm();
  appendToForm([
    fullName,
    email,
    house,
    family,
    content,
    rate,
    comment,
  ]);
}

function addSubmitButtonEvents() {
  const submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    replaceForm();
  });
}

window.onload = () => {
  addFormEvents();
  addAgreementEvent();
  addCommentEvents();
  addSubmitButtonEvents();
};
