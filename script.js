const emailTrybe = 'tryber@teste.com';
const passwordTrybe = '123456';
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const checkAgreement = document.getElementById('agreement');
const btnSend = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');

btnLogin.addEventListener('click', () => {
  if (inputEmail.value === emailTrybe && inputPassword.value === passwordTrybe) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkAgreement.addEventListener('change', (event) => {
  if (event.target.checked) {
    btnSend.removeAttribute('disabled');
  } else {
    btnSend.setAttribute('disabled', 'disabled');
  }
});

function updateCounter() {
  const maxLenght = Number(textarea.getAttribute('maxlength'));
  const currentLenght = textarea.value.length;
  counter.innerHTML = maxLenght - currentLenght;
}
updateCounter();

function getRadioSelected() {
  const frontend = document.getElementById('frontend');
  const backend = document.getElementById('backend');
  const fullStack = document.getElementById('fullStack');
  let radioValue = '';
  if (frontend.checked) {
    radioValue = frontend.value;
  } else if (backend.checked) {
    radioValue = backend.value;
  } else if (fullStack.checked) {
    radioValue = fullStack.value;
  }
  return radioValue;
}

function getCheckboxesSelected() {
  const checkboxes = document.getElementsByName('content[]');
  const selectedCheckboxes = [];
  for (let index = 0; index < checkboxes.length; index += 1) {
    if (checkboxes[index].checked) {
      selectedCheckboxes.push(checkboxes[index].value);
    }
  }
  return selectedCheckboxes;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = getRadioSelected();
  const content = getCheckboxesSelected();
  const note = document.querySelector('input[type="radio"][name="rate"]:checked').value;
  let concat = `Nome: ${firstName} ${lastName} Email: ${email} `;
  concat += `Casa: ${house} Família: ${family} Matérias: ${content.join(', ')} `;
  concat += `Avaliação: ${note} Observações: ${textarea.value}`;
  form.innerHTML = concat;
});
