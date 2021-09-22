// Declarações
const loginButton = document.getElementById('login-button');
const login = document.getElementById('email');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

// Funções
function verifyLogin() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

function verifyAgreementSubmitBtn() {
  if (agreement.checked === true) {
    submitButton.disabled = false;
  } else if (agreement.checked === false) {
    submitButton.disabled = true;
  }
}

// EventListeners
agreement.addEventListener('click', verifyAgreementSubmitBtn);
loginButton.addEventListener('click', verifyLogin);

// Referências
// Button Disabled Property - https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
// Checkbox Checked Property - https://www.w3schools.com/jsref/prop_checkbox_checked.asp
