const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.password');
const enterButton = document.querySelector('.enter');
const textArea = document.getElementById('textarea');
const label = document.getElementById('counter');
const countText = 'Caracteres Disponiveis: ';
const textCount = document.getElementById('textarea').maxLength;

function alerts() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
enterButton.addEventListener('click', alerts);

const check = document.getElementById('agreement');
function checkup() {
  if (!check.checked){
    document.getElementById('submit-btn').setAttribute('disabled');
  } else {
    document.getElementById('submit-btn').removeAttribute('disabled');
  }
};
check.addEventListener('click', checkup)

function counterText() {
  label.innerHTML = countText + textCount;
}
counterText()

  function reduceNumber() {
    let contador = 500;
    label.innerHTML = (contador - textArea.value.length);
  };
textArea.addEventListener('keyup', reduceNumber);
