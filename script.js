const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const countCharacters = document.getElementById('counter');

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

window.onload = function trybewartsProject() {
  loginBtn.addEventListener('click', validateLogin); // Chama a função validateLogin ao clicar no botão do login.
  agreement.addEventListener('change', enableSubmitBtn); // Chama a função enableSubmitBtn quando o checkbox é marcado ou desmarcado.
  textarea.addEventListener('keyup', countingCharacters);
};
