const botaoLogin = document.getElementsByClassName('botao-login')[0];
const inputEmail = document.getElementById('email-login');
const inputPassword = document.getElementById('password-login');
const botaoSubmit = document.getElementById('submit-btn');
const agreed = document.getElementById('agreement');
const areaContador = document.querySelector('#textarea');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmailForm = document.getElementById('input-email');
const house = document.getElementById('house');
const inputFamily = document.getElementsByName('family');
const subject = document.getElementsByClassName('subject');
const inputRate = document.getElementsByName('rate');
const textArea = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');

function checkLogin() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function disable() {
  if (agreed.checked) {
    botaoSubmit.disabled = false;
  } else {
    botaoSubmit.disabled = true;
  }
}

agreed.addEventListener('change', disable);
botaoLogin.addEventListener('click', checkLogin);

function contador() {
  const contadorValor = document.querySelector('#textarea').textLength;
  const number = 500 - contadorValor;
  document.querySelector('#counter').innerHTML = number;
}
areaContador.addEventListener('keyup', contador);

/* Função para mudar o formulário */
const fullNameInput = () => `Nome: ${inputName.value} ${inputLastName.value}`;

const emailInput = () => `Email: ${inputEmailForm.value}`;

const houseInput = () => `Casa: ${house.value}`;

const familyInput = () => {
  let family;
  for (let index = 0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      family = `Família: ${inputFamily[index].value}`;
    }
  }
  return family;
};

const inputSubject = () => {
  let materias = 'Matérias: ';
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      materias += `${subject[index].value}, `;
    }
  }
  materias = materias.replace(/(, )$/, '');
  return materias;
};

const rateForm = () => {
  let rateValue = '';
  for (let index = 0; index < inputRate.length; index += 1) {
    if (inputRate[index].checked) {
      rateValue = `Avaliação: ${inputRate[index].value}`;
    }
  }
  return rateValue;
};

const textAreaForm = () => `Observações: ${textArea.value}`;

const submitForm = () => {
  const allFuncs = [fullNameInput(),
    emailInput(),
    houseInput(),
    familyInput(),
    inputSubject(),
    rateForm(),
    textAreaForm(),
  ];
  const div = document.createElement('div');
  for (let index = 0; index < allFuncs.length; index += 1) {
    const p = document.createElement('p');
    p.innerText = allFuncs[index];
    div.appendChild(p);
  }
  form.innerHTML = '';
  form.appendChild(div);
};

botaoSubmit.addEventListener('click', submitForm);
