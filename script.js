const password = document.getElementById('password');
const email = document.getElementById('email');
const headerButton = document.getElementById('header-button');
const submitBtn = document.getElementById('submit-btn');
const agreementImput = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const limite = parseInt(textArea.getAttribute('maxlength'), 10);
let checked = false;

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function concordar() {
  if (checked === false) {
    checked = true;
  } else {
    checked = false;
  }

  if (checked) {
    submitBtn.removeAttribute('disabled');
    submitBtn.style.cursor = 'pointer';
  } else {
    submitBtn.style.cursor = 'initial';
    submitBtn.setAttribute('disabled', null);
  }
}

function atualizaContador() {
  counter.innerHTML = limite - textArea.value.length;
}

agreementImput.addEventListener('click', concordar);

headerButton.addEventListener('click', login);

textArea.addEventListener('input', atualizaContador);

// console.log(typeof(textArea.getAttribute('maxlength')));