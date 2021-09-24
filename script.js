const loginEmail = document.querySelector('.trybewarts-email');
const loginPassword = document.querySelector('.trybewarts-password');
const loginButton = document.querySelector('.trybewarts-submit');
const familyDiv = document.querySelector('.family-container');
const learningDiv = document.querySelector('.learning-container');
const ratingDiv = document.querySelector('.rating-container');

// Funcao para ajudar na criacao de novos elementos
function newChild(type, text, classs, id) {
  const newChildItem = document.createElement(type);
  newChildItem.innerText = text;
  if (classs !== '') {
    newChildItem.className = classs;
  }
  if (id !== '') {
    newChildItem.id = id;
  }
  return newChildItem;
}

// Funcao para criar os inputs tipo checkbox
function createCheckbox(learningArray) {
  const newCheck = document.createElement('input');
  newCheck.type = 'checkbox';
  newCheck.id = `learning${learningArray}`;
  newCheck.value = learningArray;
  return newCheck;
}

// Funcao para criar os inputs do tipo radio da secao da familia
function createInput(positionId, familyArray) {
  const newInput = document.createElement('input');
  newInput.id = positionId;
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
  newInput.type = 'radio';
  return newInput;
};

// Funcao para criar os labels dos input tipo checkbox
function createLabelCheck(learningArray) {
  const newLabel = document.createElement('label');
  newLabel.for = `learning${learningArray}`;
  newLabel.innerText = learningArray;
  return newLabel;
}

// Funcao para criar os labels dos input tipo radio da secao familia
function createLabel(positionId, familyArray) {
  const newLabel = newChild('label', ` Familia ${familyArray}`, '', '');
  newLabel.for = positionId;
  return newLabel;
}

// Funcao para criar os labels dos input tipo radio da secao rating
const createLabelRating = (number) => {
  const newLabel = newChild('label', ` ${number}`, '', '');
  newLabel.for = `radio_${number}`;
  return newLabel;
};

// Funcao para criar as divs containers dos input checkbox
function createLearningSection() {
  const learningsArray = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  for (let index = 0; index < learningsArray.length; index += 1) {
    const newDiv = document.createElement('div');
    learningDiv.append(newDiv);
    newDiv.append(createCheckbox(learningsArray[index]));
    newDiv.append(createLabelCheck(learningsArray[index]));
  }
}

// Funcao para criar as divs containers dos input tipo radio da secao familia
function createFamilySection() {
  const familysArray = ['Frontend', 'Backend', 'FullStack'];
  const positionsId = ['firstFamily', 'secondFamily', 'thirdFamily'];
  for (let index = 0; index < familysArray.length; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.append(createInput(positionsId[index], familysArray[index]));
    newDiv.append(createLabel(positionsId[index], familysArray[index]));
    familyDiv.append(newDiv);
  }
}

// Funcao para criar as divs containers dos input tipo radio da secao rating
const createRatingSection = () => {
  for (let index = 1; index <= 10; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.append(createInputRating(index));
    newDiv.append(createLabelRating(index));
    ratingDiv.append(newDiv);
  }
};

// Evento do botao para verificar cadastro
loginButton.addEventListener('click', (event) => {
  const logMail = 'tryber@teste.com';
  const logPass = '123456';
  event.preventDefault();

  if ((loginEmail.value === logMail) && (loginPassword.value === logPass)) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

window.onload = () => {
  createFamilySection();
  createLearningSection();
  createRatingSection();
};
