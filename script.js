const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');

const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

const textarea = document.getElementById('textarea');
const countCharacters = document.getElementById('counter');

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const familyInput = document.getElementsByClassName('family');
const contentInput = document.getElementsByClassName('subject');
const rateInput = document.getElementsByClassName('rate');
const formContent = document.getElementById('form-content');

const userInputs = document.getElementById('user-inputs');
let rate = '';
let family = '';
let subjects = '';

function validateLogin() {
  // Parte do requisito 3: Confere se o login é válido e alerta.
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function enableSubmitBtn() {
  // Requisito 18: Confere se o atributo 'disable' está configurado no botão de enviar o formulário.
  // Se true, remove o atributo. Se false, adiciona o atributo.
  submitBtn.toggleAttribute('disabled');
}

// Resquisito 20 adicionar contador de caracteres

function countingCharacters() {
  const counter = (500 - (textarea.value.length));
  countCharacters.innerText = counter;
}

function verifyFamily() {
  // Recupera o valor do input radio de class="family".
  // Em um laço, verifica se o valor do atributo checked de cada posição do objeto array-like é igual a true.
  // Se for, adiciona o valor do elemento dessa posição a uma variável e interrompe o laço.
  for (let i = 0; i < familyInput.length; i += 1) {
    if (familyInput[i].checked === true) {
      family = familyInput[i].value;
      break;
    }
  }
}

function verifyContent() {
  // Recupera o valor do input checkbox de class="content".
  // Em um laço, verifica se o valor do atributo checked de cada posição do objeto array-like é igual a true.
  // Se for, concatena esse valor a uma variável.
  let contents = '';
  for (let i = 0; i < contentInput.length; i += 1) {
    if (contentInput[i].checked === true) {
      contents += `${contentInput[i].value}, `;
    }
    const contentString = contents.length;
    subjects = contents.slice(0, (contentString - 2)); // O método slice extrai parte de uma string por meio da posição inicial e posição final.
  }
}

function verifyRate() {
  // Recupera o valor do input radio de class="rate".
  // Em um laço, verifica se o valor do atributo checked de cada posição do objeto array-like é igual a true.
  // Se for, transforma o valor do elemento dessa posição em um número inteiro, o adiciona esse número a uma
  // variável e interrompe o laço.
  for (let i = 0; i < rateInput.length; i += 1) {
    if (rateInput[i].checked === true) {
      rate = parseInt(rateInput[i].value, 10);
      break;
    }
  }
}

function showFormContent(event) {
  // Recupera os valores dos inputs, cria um parágrafos com essas informações e o adiciona no #form-content.
  // Depois configura o display do #user-inputs e do #form-content.
  event.preventDefault(); // Cancela o default do botão tipo submit.
  verifyFamily();
  verifyContent();
  verifyRate();
  const paragraph = document.createElement('p');
  formContent.appendChild(paragraph);
  paragraph.innerText = `Nome: ${inputName.value} ${inputLastName.value}
  Email: ${inputEmail.value}
  Casa: ${house.value}
  Família: ${family}
  Matérias: ${subjects}
  Avaliação: ${rate}
  Observações: ${textarea.value}`;
  userInputs.style.display = 'none';
  formContent.style.display = 'flex';
}

window.onload = function trybewartsProject() {
  loginBtn.addEventListener('click', validateLogin); // Chama a função validateLogin ao clicar no botão do login.
  agreement.addEventListener('change', enableSubmitBtn); // Chama a função enableSubmitBtn quando o checkbox é marcado ou desmarcado.
  textarea.addEventListener('keyup', countingCharacters);
  submitBtn.addEventListener('click', showFormContent); // Chama a função showFormContent ao clicar no botão de enviar formulário.
};
