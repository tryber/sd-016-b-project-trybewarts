// utilities
const q = (par) => document.querySelector(par);

const email = q('#email');
const senha = q('#senha');
const entrar = q('#entrar');
const agreement = q('.agreement-container');
const submit = q('#submit-btn');

const validateEmail = (e) => {
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const ableButton = () => {
  if (submit.disabled === true) submit.disabled = false;
  else submit.disabled = true;
};

entrar.addEventListener('click', validateEmail);
agreement.addEventListener('change', ableButton);
