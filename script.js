const loginEmail = document.querySelector('.trybewarts-email');
const loginPassword = document.querySelector('.trybewarts-password');
const loginButton = document.querySelector('.trybewarts-submit');
const familyDiv = document.querySelector('.family-container');
const learningDiv = document.querySelector('.learning-container');
const ratingDiv = document.querySelector('.rating-container');
const submitButton = document.querySelector('#submit-btn');
const checkboxAgreement = document.querySelector('#agreement');
const counterTextarea = document.querySelector('#textarea');
const counterLegend = document.querySelector('#counter');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputHouse = document.querySelector('#house');
const evaluationForm = document.querySelector('#evaluation-form');
const inputsClass = 'form-check-input';

// Funcao para criar os inputs tipo checkbox
function createCheckbox(learningArray) {
  const newCheck = document.createElement('input');
  newCheck.type = 'checkbox';
  newCheck.className = `learning subject ${inputsClass}`;
  newCheck.id = `learning${learningArray}`;
  newCheck.value = learningArray;
  return newCheck;
}

// Funcao para criar os inputs do tipo radio da secao da familia
function createInput(positionId, familyArray) {
  const newInput = document.createElement('input');
  newInput.id = positionId;
  newInput.className = `family ${inputsClass}`;
  newInput.type = 'radio';
  newInput.name = 'family';
  newInput.value = familyArray;
  return newInput;
}

// Funcao para criar os inputs do tipo radio da secao do rating
const createInputRating = (number) => {
  const newInput = document.createElement('input');
  newInput.name = 'rate';
  newInput.value = number;
  newInput.id = `radio_${number}`;
  newInput.className = `rating ${inputsClass}`;
  newInput.type = 'radio';
  return newInput;
};

// Funcao para criar os labels dos input tipo checkbox
function createLabel(stringFor, innerTxt, classLabel) {
  const newLabel = document.createElement('label');
  newLabel.htmlFor = stringFor;
  newLabel.innerText = innerTxt;
  if (classLabel !== '') newLabel.className = classLabel;
  return newLabel;
}

// Funcao para criar as divs containers dos input checkbox
function createLearningSection() {
  const learningsArray = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  for (let index = 0; index < learningsArray.length; index += 1) {
    const newDiv = document.createElement('div');
    learningDiv.append(newDiv);
    newDiv.append(createCheckbox(learningsArray[index]));
    newDiv.append(createLabel(`learning${learningsArray[index]}`, learningsArray[index], ''));
  }
}

// Funcao para criar as divs containers dos input tipo radio da secao familia
function createFamilySection() {
  const familysArray = ['Frontend', 'Backend', 'FullStack'];
  const positionsId = ['firstFamily', 'secondFamily', 'thirdFamily'];
  for (let index = 0; index < familysArray.length; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.append(createInput(positionsId[index], familysArray[index]));
    newDiv.append(createLabel(positionsId[index], familysArray[index], ''));
    familyDiv.append(newDiv);
  }
}

// Funcao para criar as divs containers dos input tipo radio da secao rating
const createRatingSection = () => {
  for (let index = 1; index <= 10; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.append(createInputRating(index));
    newDiv.append(createLabel(`radio_${index}`, index, ''));
    ratingDiv.append(newDiv);
  }
};

const verifyFirstChecked = (check, learning) => {
  if (check.checked === true) {
    return (learning === '') ? `${check.value}` : `, ${check.value}`;
  }
  return '';
};

const getChecked = (classChecked) => {
  const checkList = document.querySelectorAll(classChecked);
  let learning = '';
  for (let index = 0; index < checkList.length; index += 1) {
    learning += verifyFirstChecked(checkList[index], learning);
  }
  return learning;
};

const createFormObject = () => {
  const formObject = {
    name: `Nome: ${inputName.value} ${inputLastName.value}`,
    email: `Email: ${inputEmail.value}`,
    house: `Casa: ${inputHouse.value}`,
    family: `Família: ${getChecked('.family')}`,
    materias: `Matérias: ${getChecked('.learning')}`,
    avaliacao: `Avaliação: ${getChecked('.rating')}`,
    observacao: `Observações: ${counterTextarea.value}`,
  };
  return formObject;
};

const updateForm = (formObject) => {
  const values = Object.values(formObject);
  for (let index = 0; index < values.length; index += 1) {
    const text = document.createElement('p');
    text.innerText = values[index];
    evaluationForm.append(text);
  }
};

// Evento do botao para verificar cadastro
loginButton.addEventListener('click', (evt) => {
  const logMail = 'tryber@teste.com';
  const logPass = '123456';
  evt.preventDefault();

  if (loginEmail.value === logMail && loginPassword.value === logPass) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Evento do textarea para limitar a quantidade de caracteres em 500
counterTextarea.addEventListener('input', (evt) => {
  const textareaInput = counterTextarea.value.length;
  const maxChar = 500;
  if ((textareaInput >= maxChar) && (evt.keyCode !== 8)) {
    evt.preventDefault();
  }
  counterLegend.innerText = maxChar - textareaInput;
});

// Evento para desabilitar o button Enviar quando o checkbox não estiver selecionado
checkboxAgreement.addEventListener('change', (evt) => {
  submitButton.disabled = !evt.target.checked;
});

// Evento do botao para enviar o formulario
submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const formObject = createFormObject();
  evaluationForm.innerHTML = '';
  updateForm(formObject);
});

window.onload = () => {
  createFamilySection();
  createLearningSection();
  createRatingSection();
};
