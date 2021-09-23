const loginButton = document.getElementById('login');
const agreeCheck = document.getElementById('agreement');
const buttonContainer = document.querySelector('.button-container');
const createSubmit = document.createElement('button');
const textAreaInput = document.getElementById('textarea');
const form1 = document.querySelector('#evaluation-form');
const divRespostas = document.getElementById('respostas-fomulario');
divRespostas.style.display = 'none';

// Evento para verificar email e senha.
loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  console.log(senha);
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Criando botão Enviar.
createSubmit.id = 'submit-btn';
createSubmit.type = 'submit';
createSubmit.innerText = 'Enviar';
createSubmit.setAttribute('disabled', true);
buttonContainer.appendChild(createSubmit);

// Evento para habilitar e desabilitar o botão enviar.
agreeCheck.addEventListener('click', () => {
  if (createSubmit.disabled === true) {
    createSubmit.removeAttribute('disabled', '');
  } else {
    createSubmit.setAttribute('disabled', true);
  }
});

// Função para contar os caracteres
function textAreaCounter() {
  const textArea = document.getElementById('textarea').value;
  const contador = document.getElementById('counter');
  contador.innerText = 500 - textArea.length;
}

// Evento para contar os caracteres em tempo real
textAreaInput.addEventListener('input', textAreaCounter);

// Função para salvar os inputs - Observação
function getTextareaInput() {
  const textAreaValue = textAreaInput.value;
  const p = document.getElementById('resposta-observacao');
  p.innerText = `Observações: ${textAreaValue}`;
}

// Função para salvar os inputs - Avaliação
function getAvaliationInput() {
  const inputAvaliation = document.querySelectorAll('.rate-input');
  for (let index = 0; index < inputAvaliation.length; index += 1) {
    if (inputAvaliation[index].checked) {
      const p = document.getElementById('resposta-avaliacao');
      p.innerText = `Avaliação: ${inputAvaliation[index].value}`;
    }
  }
  getTextareaInput();
}

// Função para salvar os inputs - Matérias
function getConteudoInput() {
  const inputConteudo = document.querySelectorAll('.subject');
  const p = document.getElementById('resposta-materia');
  const materias = [];
  for (let index = 0; index < inputConteudo.length; index += 1) {
    if (inputConteudo[index].checked) {
      materias.push(` ${inputConteudo[index].value}`);
    }
  }
  p.innerText = `Matérias: ${materias}`;
  getAvaliationInput();
}

// Função para salvar os inputs - Familia
function getFamiliaInput() {
  const inputFamily = document.querySelectorAll('.family-check');
  for (let index = 0; index < inputFamily.length; index += 1) {
    if (inputFamily[index].checked) {
      const p = document.getElementById('resposta-familia');
      p.innerText = `Família: ${inputFamily[index].value}`;
    }
  }
  getConteudoInput();
}

// Função para salvar os inputs - Casa
function getCasaInput() {
  const inputCasa = document.getElementById('house').value;
  const p = document.getElementById('resposta-casa');
  p.innerText = `Casa: ${inputCasa}`;
  getFamiliaInput();
}

// Função para salvar os inputs - Email
function getEmailInput() {
  const inputEmail = document.getElementById('input-email').value;
  const p = document.getElementById('resposta-email');
  if (inputEmail !== '') {
    p.innerText = `Email: ${inputEmail}`;
  }
  getCasaInput();
}

// Função para salvar os inputs - Nome
function getNameInput() {
  const inputName = document.getElementById('input-name').value;
  const inputLastName = document.getElementById('input-lastname').value;
  const p = document.getElementById('resposta-nome');
  if (inputName !== '' && inputLastName !== '') {
    p.innerText = `Nome: ${inputName} ${inputLastName}`;
  }
  getEmailInput();
}

// Função para apagar o formulário
createSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  form1.style.display = 'none';
  divRespostas.style.display = '';
  getNameInput();
});
