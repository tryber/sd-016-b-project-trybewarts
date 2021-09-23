const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const agreeCheckbox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerHTML = '500';

const logInFeedback = () => {
  if (emailInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
};
loginButton.addEventListener('click', logInFeedback);

agreeCheckbox.addEventListener('click', (event) => {
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

textArea.onkeyup = () => {
  counter.innerHTML = `${500 - textArea.value.length}`;
};
