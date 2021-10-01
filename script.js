const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const evaluationForm = document.querySelector('#evaluation-form');
const nameValue = document.querySelector('#input-name');
const lnameValue = document.querySelector('#input-lastname');
const emailValue = document.querySelector('#input-email');
const houseValue = document.querySelector('#house');
const observationVal = document.querySelector('#textarea');
const familyValue = document.querySelectorAll('.family');
const subjects = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.rate');

const familyArr = [];
const subjectsArr = [];
const rateArr = [];

loginButton.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' || passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (submitBtn.disabled === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

textArea.addEventListener('keyup', () => {
  const initialCount = 500;
  const currentCount = textArea.value.length;
  counter.innerText = initialCount - currentCount;
});

function getSubjects(subject) {
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked === true) {
      subjectsArr.push(` ${subject[i].value}`);
    }
    subjectsArr.join(',');
  }
}

function getRate(rates) {
  for (let i = 0; i < rates.length; i += 1) {
    if (rates[i].checked === true) {
      rateArr.push(rates[i].value);
    }
  }
}

function getFamily(familyValues) {
  for (let i = 0; i < familyValues.length; i += 1) {
    if (familyValues[i].checked === true) {
      familyArr.push(familyValues[i].value);
      console.log(familyArr);
    }
  }
}

submitBtn.addEventListener('click', () => {
  getSubjects(subjects);
  getFamily(familyValue);
  getRate(rate);

  evaluationForm.innerText = `Nome: ${nameValue.value} ${lnameValue.value}
  Email: ${emailValue.value}
  Casa: ${houseValue.value}
  Família: ${familyArr}
  Matérias: ${subjectsArr}
  Avaliação: ${rateArr}
  Observações: ${observationVal.value}`;
});
