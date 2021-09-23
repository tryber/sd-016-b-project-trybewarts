const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('senha');
const buttonEnter = document.getElementById('btn-entrar');
const checkAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.getElementById('textarea');
const countCaracters = document.getElementById('counter');

buttonEnter.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

window.onload = () => {
  btnSubmit.disabled = true;
};

function agreementValidation() {
  if (checkAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
checkAgreement.addEventListener('click', agreementValidation);

countCaracters.innerText = 500;
function textCount() {
  const count = 500 - textArea.value.length;
  countCaracters.innerText = `${count}`;
}
textArea.addEventListener('keyup', textCount);

function conteudoCheck() {
  const conteudo = document.getElementsByClassName('subject');
  const check = [];
  for (let index = 0; index < conteudo.length; index += 1) {
    const checkTrue = conteudo[index];
    if (checkTrue.checked) {
      check.push(checkTrue.value);
    }
  }
  return check.join(', ');
}

// const data = document.getElementById('data');
function dataForm(event) {
  event.preventDefault();
  const inputName = document.querySelector('#input-name');
  const inputLastName = document.querySelector('#input-lastname');
  const inputEmailForm = document.querySelector('#input-email');
  const house = document.querySelector('#house');
  const evoluation = document.querySelector('input[name="rate"]:checked');
  const family = document.querySelector('input[name="family"]:checked');
  const form = document.getElementById('evaluation-form');
  form.innerHTML = `Nome: ${inputName.value} ${inputLastName.value} Email: ${inputEmailForm.value}  Casa: ${house.value} Família: ${family.value} Matérias: ${conteudoCheck()}  Avaliação: ${evoluation.value}  Observações: ${textArea.value}`;
}

btnSubmit.addEventListener('click', dataForm);
