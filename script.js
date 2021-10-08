const inputEmail = document.querySelector('.trybewarts-login #email-input');
const inputPassword = document.querySelector('.trybewarts-login #input-password');
const loginBtn = document.querySelector('.trybewarts-login button');
const submitBtn = document.querySelector('#submit-btn');

loginBtn.addEventListener('click', () => {
  const email = inputEmail.value;
  const senha = inputPassword.value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// creditos a Andrew Hubbs pela logica abaixo, link https://stackoverflow.com/questions/14086398/count-textarea-characters
const count = document.getElementById('counter');
count.innerHTML = 500;
const textareaElement = document.getElementById('textarea');

textareaElement.onkeyup = function () {
  count.innerHTML = `500/ ${500 - textareaElement.value.length}`;
};

function loginValidation() {
  const checkBox = document.querySelector('#agreement');

  submitBtn.disabled = true;
  checkBox.addEventListener('click', () => {
    if (!checkBox.checked) {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  });
}

loginValidation();

function materyCheck() {
  const mats = document.getElementsByClassName('subject');
  const matsChecked = [];

  for (let i = 0; i < mats.length; i += 1) {
    if (mats[i].checked) {
      matsChecked.push(mats[i].value);
    }
  }
  return matsChecked.join(', ');
}

function submitForm(e) {
  e.preventDefault();
  const nameElement = document.querySelector('#input-name').value;
  const lastnameElement = document.querySelector('#input-lastname').value;
  const emailElement = document.querySelector('#input-email').value;
  const houseElement = document.querySelector('#house').value;
  const familyElement = document.querySelector('input[name="family"]:checked').value;
  const rateElement = document.querySelector('input[name="rate"]:checked').value;
  const commentElement = document.querySelector('textarea').value;
  const formContent = document.querySelector('#formContent');
  formContent.innerText = `Nome: ${nameElement} ${lastnameElement}
  Email: ${emailElement}
  Casa: ${houseElement} 
  Família: ${familyElement}
  Matérias: ${materyCheck()}
  Avaliação: ${rateElement}
  Observações: ${commentElement}`;
}

submitBtn.addEventListener('click', submitForm);
