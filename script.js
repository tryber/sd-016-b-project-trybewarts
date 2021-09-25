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
const inputsClass = 'form-check-input';

// Funcao para criar os inputs tipo checkbox
function createCheckbox(learningArray) {
  const newCheck = document.createElement('input');
  newCheck.type = 'checkbox';
  newCheck.className = inputsClass;
  newCheck.id = `learning${learningArray}`;
  newCheck.value = learningArray;
  return newCheck;
}

// Funcao para criar os inputs do tipo radio da secao da familia
function createInput(positionId, familyArray) {
  const newInput = document.createElement('input');
  newInput.id = positionId;
  newInput.className = inputsClass;
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
  newInput.className = inputsClass;
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

checkboxAgreement.addEventListener('change', (evt) => {
  submitButton.disabled = !evt.target.checked;
});

window.onload = () => {
  createFamilySection();
  createLearningSection();
  createRatingSection();
};
