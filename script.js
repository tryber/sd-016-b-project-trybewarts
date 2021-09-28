/* REQUISITO_3 */
const buttonEntrar = document.getElementById('botaoEntrar');
const inputLogin = document.getElementById('email');
const inputPassword = document.getElementById('password');

function login(event) {
  event.preventDefault();
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonEntrar.addEventListener('click', login);

const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function enable() {
  // checkbox.checked == true {
  submitBtn.removeAttribute('disabled');
  console.log('teste');
}
checkbox.addEventListener('click', enable);

// CODIGO NAO TERMINADO
/* const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const textArea = document.getElementById('textarea');
const checkboxInputs = document.querySelectorAll('input[type=checkbox]');

function submitData(e) {
  e.preventDefault();
  for (let i = 0; i < checkboxInputs.length; i += 1) {
    checkboxInputs[i].classList.add('subject');
  }
  alert('enviado');
  inputName.innerHTML = inputName.value;
  inputLastName.innerHTML = inputLastName.value;
  inputEmail.innerHTML = inputEmail.value;
  textArea.innerHTML = textArea.value;
}

submitBtn.addEventListener('click', submitData);
 */
