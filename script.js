const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.password');
const enterButton = document.querySelector('.enter');

function alerts() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
enterButton.addEventListener('click', alerts);

const check = document.getElementById('agreement');
check.addEventListener('click', function checkup () {
  if (!check.checked){
    document.getElementById('submit-btn').setAttribute('disabled');
  } else {
    document.getElementById('submit-btn').removeAttribute('disabled');
  }
});

function counterText() {
  const textArea = document.getElementById('campoTexto');
  const textCount = document.getElementById('campoTexto').maxLength;
  const label = document.getElementById('counter');
  const count = 'Caracteres Disponiveis: ';
  label.innerHTML = count + textCount;

  textArea.addEventListener('keypress', function reduceNumber () {
    label.innerHTML = count + (textCount - textArea.value.length);
  });
}
counterText()