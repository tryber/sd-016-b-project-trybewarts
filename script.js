const loginEmail = document.querySelector('.trybewarts-email');
const loginPassword = document.querySelector('.trybewarts-password');
const loginButton = document.querySelector('.trybewarts-submit');
const familyDiv = document.querySelector('.family-container');
const learningDiv = document.querySelector('.learning-container');

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

function createCheckbox(learningArray) {
  const newCheck = document.createElement('input');
  newCheck.type = 'checkbox';
  newCheck.id = `learning${learningArray}`;
  newCheck.value = learningArray;
  return newCheck;
}

// <label for="learningsHofs">Hofs</label>
function createLabelCheck(learningArray) {
  const newLabel = document.createElement('label');
  newLabel.for = `learning${learningArray}`;
  newLabel.innerText = learningArray;
  return newLabel;
}

// Funcao para criar os inputs do tipo radio
function createInput(positionId, familyArray) {
  const newInput = document.createElement('input');
  newInput.id = positionId;
  newInput.type = 'radio';
  newInput.name = 'family';
  newInput.value = familyArray;
  return newInput;
}

// Funcao para criar os labels dos input tipo radio
function createLabel(positionId, familyArray) {
  const newLabel = newChild('label', ` Familia ${familyArray}`, '', '');
  newLabel.for = positionId;
  return newLabel;
}

function createLearningSection() {
  const learningsArray = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  for (let index = 0; index < learningsArray.length; index += 1) {
    const newDiv = document.createElement('div');
    learningDiv.append(newDiv);
    newDiv.append(createCheckbox(learningsArray[index]));
    newDiv.append(createLabelCheck(learningsArray[index]));
  }
}

// Funcao para criar as divs containers dos input tipo radio
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
};
