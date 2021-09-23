const email = document.querySelector('.email');
const password = document.querySelector('.password');
const loginButton = document.querySelector('.loginbtt');
const check = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function login(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', login);

botaoEnviar.disabled = true;

function itsChecked() {
  if (check.checked === true) {
    botaoEnviar.disabled = false;
  } else botaoEnviar.disabled = true;
}

check.addEventListener('click', itsChecked);

textArea.addEventListener('input', () => {
  const atual = 500;
  counter.innerText = (atual - textArea.value.length);
});
